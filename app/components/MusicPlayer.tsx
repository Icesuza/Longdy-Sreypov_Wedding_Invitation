"use client";
import { useState, useRef } from "react";
import { Volume2, VolumeX, Heart } from "lucide-react";

export default function MusicPlayer() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartInvitation = async () => {
    // 1. WEB AUDIO API UNLOCK (The "Pro" Trick for iOS)
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContext();

      // Resume context if it's suspended (standard iOS behavior)
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }

      // Create and play a tiny 0.1s silent buffer to "prime" the speakers
      const buffer = audioCtx.createBuffer(1, 1, 22050);
      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.start(0);
    } catch (e) {
      console.error("Web Audio API not supported or failed:", e);
    }

    // 2. PLAY ACTUAL MP3
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true); // Hide the cover only after music starts
        })
        .catch((err) => {
          console.error("Audio blocked by browser:", err);
          // If it fails, we still let them in, but they'll have to click the toggle later
          setHasStarted(true); 
        });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* 1. THE MANDATORY COVER (iOS UNLOCKER) */}
      {!hasStarted && (
        <div className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center p-6 text-center">
          <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
            <h2 className="font-chenla text-gold-dark text-lg tracking-widest">អបអរសាទរពិធីអាពាហ៍ពិពាហ៍</h2>
            <h1 className="text-4xl font-bold text-gold-dark uppercase tracking-tighter">Longdy & Sreypov</h1>
            
            <button 
              onClick={handleStartInvitation}
              className="bg-gold-dark text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
            >
              <Heart className="fill-current w-5 h-5" />
              បើកសំបុត្រអញ្ជើញ
            </button>
            
            <div className="space-y-1">
              <p className="text-[10px] text-gold-dark/50 italic uppercase tracking-widest">
                Please turn on your sound
              </p>
              <p className="font-chenla text-[9px] text-gold-dark/30 uppercase">
                សូមពិនិត្យមើលប៊ូតុងសំឡេងទូរស័ព្ទរបស់អ្នក
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE BACKGROUND AUDIO */}
      <audio 
        ref={audioRef} 
        loop 
        playsInline 
        src="/audio/wedding_song.mp3" 
      />

      {/* 3. PERSISTENT TOGGLE */}
      {hasStarted && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-[90] w-12 h-12 bg-white/90 backdrop-blur-sm border border-gold/30 rounded-full shadow-lg flex items-center justify-center text-gold-dark transition-all active:scale-90"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 opacity-50" />
          )}
        </button>
      )}
    </>
  );
}