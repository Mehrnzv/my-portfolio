"use client";
import Image from "next/image";
import userImage from "../public/assets/user-img.svg";
import { infoList, skillsData } from "../constants/data";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "motion/react";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg !font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl !font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col lg:flex-row justify-between items-center gap-20 my-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={userImage} alt="" className="w-full rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl !font-ovo">
            I&apos;m a frontend developer with a passion for creating
            interactive and responsive web applications. I&apos;m a quick
            learner and I&apos;m always looking to expand my knowledge and skill
            set. I&apos;m a team player and I&apos;m excited to work with others
            to create amazing applications.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ id, icon, iconDark, title, description }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer border-[0.5px] border-gray-400 rounded-xl p-6 hover:-translate-y-1 duration-500 hover:shadow-customBlack hover:bg-lightHover dark:border-white dark:hover:shadow-customWhite dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <p className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </p>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 !font-ovo dark:text-white/80"
          >
            My skills
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            {skillsData.map((skill, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center"
              >
                <Image src={skill} alt="skills" className="w-8 cursor-pointer" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
