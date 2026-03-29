"use client";
import Image from "next/image";
import ImageCard from "./ImagesLayout";
import GuestWishes from "./GuestWishes";
import KhmerScript from "./KhmerScript";
import EnglistScript from "./EnglishScript";
import Agenda from "./Agenda";
import LocationGuide from "./LocationGuide";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export default function Mainpage() {

  const flashIn: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(2px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <>
      <div className="relative bg-cream w-full rounded-t-2xl border-t-2 border-[#d4af37]/30 p-10 shadow-2xl overflow-hidden">
        <div className="absolute top-[-25px] right-2">
          <Image
            src="/images/frame.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto my-8 rotate-180"
          />
        </div>
        <div className="absolute top-[-25px] left-2">
          <Image
            src="/images/frame.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto my-8 rotate-90"
          />
        </div>
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={flashIn}
        >
          <KhmerScript />
        </motion.section>

        <Image
          src="/images/icon1.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto my-8"
        />
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={flashIn}
        >
          <EnglistScript />
        </motion.section>
        <Image
          src="/images/icon1.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto mt-8"
        />

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={flashIn}
        >
          <Agenda />
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={flashIn}
        >
          <LocationGuide />
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          className="mt-8"
          viewport={{ once: false, amount: 0.2 }}
          variants={flashIn}
        >
          <ImageCard />
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={flashIn}
        >
          <GuestWishes />
        </motion.section>

        <p className="mt-10 text-lg text-center text-gold-dark">
          {" "}
          Designed by Liza
        </p>
        <div className="absolute bottom-[-25px] left-2">
          <Image
            src="/images/frame.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto my-8"
          />
        </div>
        <div className="absolute bottom-[-25px] right-2">
          <Image
            src="/images/frame.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto my-8 rotate-270"
          />
        </div>
      </div>
    </>
  );
}
