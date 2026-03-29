"use client";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsOpen(true); // Hide the cover
        })
        .catch((err) => console.error("Playback failed:", err));
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
      {/* 1. THE COVER OVERLAY (Required for iOS "Autoplay" feel) */}
      {!isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream/95 backdrop-blur-md transition-all duration-1000">
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-700">
            <p className="font-chenla text-gold-dark text-xl">សំបុត្រអញ្ជើញអាពាហ៍ពិពាហ៍</p>
            <h1 className="text-3xl font-bold text-gold-dark tracking-widest uppercase">Longdy & Sreypov</h1>
            
            <Button 
              onClick={handleOpenInvitation}
              className="bg-gold-dark hover:bg-gold text-white px-10 py-8 rounded-full shadow-2xl flex flex-col gap-2 transition-transform active:scale-95 mx-auto"
            >
              <MailOpen className="h-6 w-6" />
              <span className="font-chenla">បើកសំបុត្រអញ្ជើញ</span>
            </Button>
          </div>
        </div>
      )}

      {/* 2. THE AUDIO ELEMENT */}
      <audio 
        ref={audioRef} 
        loop 
        playsInline 
        preload="auto"
        src="/audio/wedding_song.mp3" 
      />

      {/* 3. FLOATING TOGGLE BUTTON (Visible after opening) */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold bg-white/80 px-2 py-1 rounded-full border border-gold/20">
            {isPlaying ? "Music On" : "Muted"}
          </span>
          <Button
            onClick={toggleMusic}
            variant="outline"
            size="icon"
            className={`rounded-full shadow-lg h-12 w-12 border-gold/50 transition-all ${
              isPlaying ? "bg-gold-dark text-white animate-pulse" : "bg-white text-gold-dark"
            }`}
          >
            {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>
        </div>
      )}
    </>
  );
}