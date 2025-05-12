'use client'
import Image from "next/image";
import mailIcon from "../public/assets/mail_icon.png"
import mailIconDark from "../public/assets/mail_icon_dark.png"
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
   
  return (
    <div className="mt-20">
      <p className="font-bold text-2xl mb-2 text-center">
        Mehrnaz <span className="text-red-500">&#x2022;</span>
      </p>
      <div className="flex items-center w-max gap-2 mx-auto">
        <Image src={isDarkMode ? mailIconDark : mailIcon} alt="mail icon" className="w-6"/>
        <Link href='mailto:mehrnzv@gmail.com'>mehrnzv@gmail.com</Link>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-black/80 dark:text-white/80">&copy; {new Date().getFullYear()} Mehrnaz Vaziri. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white" target="_blank" href='https://github.com/Mehrnzv'>Github</Link>
          </li>
          <li>
            <Link className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white" target="_blank" href='https://www.linkedin.com/in/mehrnzvaziri/'>LinkedIn</Link>
          </li>
          <li>
            <Link className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white" target="_blank" href='https://www.instagram.com/mehrnzv'>Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
