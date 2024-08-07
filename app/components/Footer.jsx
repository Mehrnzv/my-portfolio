import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-10 border-t border-[#33353F] text-white">
      <div className="text-center text-[#ADB7BE] p-12">
          <Link href="https://github.com/Mehrnzv">Mehrnzv </Link>
          &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
