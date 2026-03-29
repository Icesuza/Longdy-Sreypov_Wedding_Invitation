"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Heart } from "lucide-react";

export default function MusicPlayer() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(err => console.error("Audio blocked:", err));
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
              onClick={handleStart}
              className="bg-gold-dark text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
            >
              <Heart className="fill-current w-5 h-5" />
              បើកសំបុត្រអញ្ជើញ
            </button>
            <p className="text-[10px] text-gold-dark/50 italic uppercase tracking-widest">
              Please turn on your sound
            </p>
          </div>
        </div>
      )}

      {/* 2. THE BACKGROUND AUDIO */}
      <audio ref={audioRef} loop playsInline src="/audio/wedding_song.mp3" />

      {/* 3. PERSISTENT TOGGLE (Visible everywhere) */}
      {hasStarted && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-[90] w-12 h-12 bg-white/80 backdrop-blur-sm border border-gold/30 rounded-full shadow-lg flex items-center justify-center text-gold-dark transition-all active:scale-90"
        >
          {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}
    </>
  );
}