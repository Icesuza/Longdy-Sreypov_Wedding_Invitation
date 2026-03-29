"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export default function ImageCard() {
  // 1. Defined standard Scale & Opacity animation
  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* 2. Standard Animation on the Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={scaleUp}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <Image
          src="/images/icon4.png"
          alt="Icon"
          width={100}
          height={70}
          className="mx-auto rotate-180"
        />
        <p className="font-chenla font-bold text-gold-dark text-lg lg:text-2xl text-center">
          រូបភាព
        </p>
        <Image
          src="/images/icon4.png"
          alt="Icon"
          width={100}
          height={70}
          className="mx-auto"
        />
      </motion.div>

      {/* Grid 1: 2-Column Layout */}
      <div className="grid grid-cols-2 gap-0 max-w-[600px] mx-auto overflow-hidden border shadow-md">
        {/* Top Large Image */}
        <motion.div
          className="col-span-2 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleUp}
        >
          <Image
            src="/images/weddingImg/DSC_9389.JPG"
            alt="Wedding Main"
            width={1500}
            height={1000}
            className="w-full h-auto object-cover transition-transform hover:scale-110 duration-500"
          />
        </motion.div>

        {/* Bottom Left Image */}
        <motion.div
          className="col-span-1 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleUp}
        >
          <Image
            src="/images/weddingImg/DSC_1231.JPG"
            alt="Wedding Detail 1"
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
          />
        </motion.div>

        {/* Bottom Right Column (Stacked Images) */}
        <div className="col-span-1 flex flex-col">
          <motion.div
            className="overflow-hidden h-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={scaleUp}
          >
            <Image
              src="/images/weddingImg/DSC_1241.JPG"
              alt="Wedding Detail 2"
              width={1000}
              height={500}
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
            />
          </motion.div>
          <motion.div
            className="overflow-hidden h-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={scaleUp}
          >
            <Image
              src="/images/weddingImg/DSC_9243.JPG"
              alt="Wedding Detail 3"
              width={1000}
              height={500}
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Grid 2: 3-Column Layout */}
      <div className="grid grid-cols-3 gap-0 max-w-[600px] mx-auto overflow-hidden mt-5 border shadow-md">
        {[
          "/images/weddingImg/DSC_7681.JPG",
          "/images/weddingImg/DSC_7749.JPG",
          "/images/weddingImg/DSC_7758.JPG",
          "/images/weddingImg/DSC_8132.JPG",
          "/images/weddingImg/DSC_8141.JPG",
          "/images/weddingImg/DSC_8216.JPG",
        ].map((src, idx) => (
          // 3. Keep standard once: false to flash both ways
          <motion.div
            key={idx}
            className="col-span-1 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={scaleUp}
          >
            <Image
              src={src}
              alt={`Wedding Gallery ${idx}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
