import { cn } from "@/lib/utils";
import Link from "next/link";

const NavLink = ({ title, href, className }) => {
  return (
    <Link className={cn("group relative text-sm font-medium text-white/80 hover:text-white transition-colors", className)} href={href}>
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
