import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DonateBtn from "../ui/DonateBtn";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const location = useLocation();
  const links = [
    // { label: "Home", path: "/" },
    { label: "Who We Are", path: "/who-we-are" },
    { label: "Impact", path: "/impact" },
    { label: "CSR & Partnerships", path: "/csr-&-partnerships" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("In Navbar", isOpen);
  return (
    <div
      className={`w-full px-12 py-4 fixed top-0 z-999 transition-all duration-300 ${isScrolled ? "bg-white py-4 shadow-md" : "bg-transparent py-6 text-white"}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">
          <Link to={"/"}>ASVSS</Link>
        </h3>
        <div className="lg:hidden">
            <Menu onClick = {toggleMenu}/>
        </div>
        <div className={isOpen ? "absolute block top-0 left-0 w-full h-screen" : "hidden"}>
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="sm: hidden md:hidden lg:block">
          <div className="flex gap-10 items-center">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}>
                  {link.label}
                </Link>
              );
            })}
            <DonateBtn
              bgcolor={isScrolled ? "black" : "white"}
              txtcolor={isScrolled ? "white" : "black"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
