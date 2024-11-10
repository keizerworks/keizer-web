import { DM_Mono } from "next/font/google";
import Link from "next/link";
const dM_Mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const NavLink = ({ linkName, index }: { linkName: string; index?: number }) => {
  return (
    <Link className={`${dM_Mono.className} group relative`} href={`#${linkName}`}>
      {index !== undefined && (
        <span className="absolute text-[9px] group-hover:opacity-100 ease-in-out transition-all opacity-70 translate-y-2 top-[-100%] right-0">
          0{index + 1}
        </span>
      )}
      {linkName}
    </Link>
  );
};

export default NavLink;
