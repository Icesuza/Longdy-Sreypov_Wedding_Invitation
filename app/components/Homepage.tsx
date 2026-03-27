"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Frontpage from "./Frontpage";
import Mainpage from "./Mainpage";
import MusicPlayer from "./MusicPlayer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const textY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-42vh"]);
  const textScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  return (
    <main className="relative bg-cream min-h-[300vh] max-w-[600px] mx-auto overflow-x-hidden">
      <MusicPlayer/>
      {/* SECTION 1: The Sticky Hero Area */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20">
        
        {/* Background Image / Overlay */}
        <motion.div style={{ opacity: backgroundOpacity }} className="absolute inset-0 w-full h-full">
           <Frontpage isOnlyBackground={true} isOnlyText={false} /> 
        </motion.div>

        {/* The Animated Text that moves to top and STAYS there */}
        <motion.div 
          style={{ y: textY, scale: textScale }}
          className="relative z-30 pointer-events-none"
        >
          <Frontpage isOnlyText={true} isOnlyBackground={false} />
        </motion.div>
      </div>

      {/* SECTION 2: The Content that scrolls over */}
      <div className="relative z-40 -mt-[10vh] mx-auto">
        <Mainpage />
      </div>
    </main>
  );
}
