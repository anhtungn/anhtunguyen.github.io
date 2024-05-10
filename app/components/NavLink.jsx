'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href }) => {
  const pathname = usePathname();
  
  return (
    <Link className={`rounded p-1 ${pathname === href.path && "bg-black text-white" }`} href={href.path}>
      {href.title}
    </Link>
  );
};

export default NavLink;