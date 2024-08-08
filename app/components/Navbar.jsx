"use client";
import Link from "next/link";
import { navlinks } from "../constants/data";
import NavLink from "./NavLink";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { TbHexagonLetterMFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleCloseMenu = () => setMenuToggle(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-100 border-b border-[#33353F] mx-auto bg-[#121212]">
      <div className="flex flex-wrap items-center justify-between px-5 lg:px-14 py-3">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
          <Link href="/" className="text-pink-500 text-xl">
            <TbHexagonLetterMFilled size={30} />
          </Link>
        </motion.div>
        <div className="flex items-center space-x-4 md:hidden">
          {menuToggle ? (
            <button onClick={() => setMenuToggle(false)}>
              <AiOutlineClose size={23} />
            </button>
          ) : (
            <button onClick={() => setMenuToggle(true)}>
              <FiMenu size={23} />
            </button>
          )}
        </div>
        <div className="hidden md:flex md:gap-9 md:w-auto" id="navbar">
          <ul className="flex md:flex-row gap-10">
            {navlinks.map((link, index) => (
              <li className="text-lg hover:text-purple-400" key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {menuToggle && (
        <div className="flex justify-center items-center md:hidden px-12 py-7">
          <ul className="flex flex-col items-center">
            {navlinks.map((link, index) => (
              <li className="text-lg mb-1" key={index}>
                <NavLink handleCloseMenu={handleCloseMenu} href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
