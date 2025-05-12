"use client";

import Image from "next/image";
import Link from "next/link";
import arrowIcon from "../public/assets/arrow-icon.png";
import arrowIconDark from "../public/assets/arrow-icon-dark.png";
import headerBg from "../public/assets/header-bg-color.png";
import moonIcon from "../public/assets/moon_icon.png";
import sunIcon from "../public/assets/sun_icon.png";
import menuBlack from "../public/assets/menu-black.png";
import menuWhite from "../public/assets/menu-white.png";
import closeBlack from "../public/assets/close-black.png";
import closeWhite from "../public/assets/close-white.png";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { id: 1, title: "Home", path: "#top" },
  { id: 2, title: "About me", path: "#about" },
  { id: 3, title: "My work", path: "#work" },
  { id: 4, title: "Contact me", path: "#contact" },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={headerBg} alt="header bg" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-[rgba(255,255,255,0.5)] backdrop-blur-lg shadow-sm dark:bg-darkTheme shadow-white/20"
            : ""
        }`}
      >
        <Link href="/" className="cursor-pointer">
          <p className="font-bold text-2xl ">
            Mehrnaz <span className="text-red-500">&#x2022;</span>
          </p>
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-[rgba(255,255,255,0.5)] shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.path} className="!font-ovo">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer" onClick={toggleTheme}>
            {isDarkMode ? (
              <Image src={sunIcon} alt="sunIcon" className="w-6" />
            ) : (
              <Image className="w-6" src={moonIcon} alt="moon icon" />
            )}
          </button>

          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={isDarkMode ? arrowIconDark : arrowIcon} className="w-3" alt="arrow" />
          </Link>

          <button
            className="cursor-pointer block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image
              className="w-6"
              src={isDarkMode ? menuWhite : menuBlack}
              alt="menu"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? closeWhite : closeBlack}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          {navLinks.map((link) => (
            <li key={link.id}>
              <Link onClick={closeMenu} href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
