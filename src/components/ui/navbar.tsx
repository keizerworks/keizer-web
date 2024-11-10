import Image from "next/image";
import NavLink from "../shared/nav-link";
import { Space_Grotesk } from "next/font/google";
import { Button } from "~/src/components/ui/button";
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
  const links = ["Our Projects", "Services", "Reviews", "About Us", "Contact"];
  return (
    <nav className="w-full text-white bg-black/50 backdrop-blur-sm sticky top-0 h-[130px] flex justify-between items-center">
      <div className="max-w-[1440px] w-full flex justify-between items-center mx-auto">
        <Image
          src={"/assets/logos/keizer-logo-name.svg"}
          height={79.82}
          width={175}
          alt="keizer-brand-logo"
        />
        <div className="flex items-center gap-[70px]">
          <ul className="flex gap-[30px] text-[16px]">
            {links.map((link, index) => {
              return (
                <li key={link}>
                  <NavLink linkName={link} index={index} />
                </li>
              );
            })}
          </ul>
          <Button
            className={`${space_Grotesk.className} font-[700] rounded-[4px]`}
          >
            Let's talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
