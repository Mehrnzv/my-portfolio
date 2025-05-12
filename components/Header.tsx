"use client";

import { motion } from "motion/react";
import Image from "next/image";
import profile from "../public/assets/profile.svg";
import handIcon from "../public/assets/hand-icon.png";
import rightArrow from "../public/assets/right-arrow-white.png";
import downloadIcon from "../public/assets/download-icon.png";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={profile} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 !font-ovo"
      >
        Hi! I&apos;m Mehrnaz Vaziri{" "}
        <Image src={handIcon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] !font-ovo"
      >
        frontend developer based in Tehran.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto !font-ovo"
      >
        I&apos;m a frontend developer driven by a passion for building
        innovative digital solutions, constantly exploring new technologies, and
        growing through continuous learning.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2 border border-white dark:bg-transparent"
          href="#contact"
        >
          Connect with me <Image src={rightArrow} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          href="/MehrnazVaziri-resume.pdf"
          download
        >
          My resume <Image src={downloadIcon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
