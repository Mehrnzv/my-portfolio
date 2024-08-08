import Link from "next/link";

const NavLink = ({ href, title, handleCloseMenu }) => {
  return <Link onClick={handleCloseMenu} href={href}>{title}</Link>;
};

export default NavLink;
