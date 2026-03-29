"use client";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // iOS Fix: Unlock audio on the very first touch/click anywhere on the page
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          // Remove listeners once unlocked
          window.removeEventListener("click", unlockAudio);
          window.removeEventListener("touchstart", unlockAudio);
        }).catch(() => {
          console.log("Waiting for user interaction...");
        });
      }
    };

    window.addEventListener("click", unlockAudio);
    window.addEventListener("touchstart", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the global "unlock" from firing again
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
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Label - Moved inside the container for better alignment */}
      <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold opacity-70 bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">
        {isPlaying ? "Playing" : "Music Off"}
      </span>

      <audio 
        ref={audioRef} 
        loop 
        playsInline // Added for iOS compatibility
        src="/audio/OLICA_ភ្ជាប់និស្ស័យ_NISAI_ft_KZ_Long_&_Chan_Official_Lyric_Video.mp3" 
      />
      
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="icon"
        className={`rounded-full shadow-lg border-gold/50 h-12 w-12 transition-all duration-500 ${
          isPlaying ? "bg-gold-dark text-white animate-pulse" : "bg-white text-gold-dark"
        }`}
      >
        {isPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
      </Button>
    </div>
  );
}