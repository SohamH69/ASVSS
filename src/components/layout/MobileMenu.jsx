import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DonateBtn from "../ui/DonateBtn";

function MobileMenu({ isOpen, toggleMenu }) {
  const location = useLocation();
  const links = [
    { label: "Home", path: "/" },
    { label: "Who We Are", path: "/who-we-are" },
    { label: "Impact", path: "/impact" },
    { label: "CSR & Partnerships", path: "/csr-&-partnerships" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className={isOpen ? "bg-white h-full w-full p-10 flex flex-col gap-8" : "hidden"}>
      <div>
        <X color="#000000" style={{ float: "right" }} onClick={toggleMenu} />
      </div>
      <div className="text-right flex flex-col gap-8 text-3xl">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          console.log(link.label);
          return (
            <Link
              key={link.path}
              to={link.path}
              className="text-black flex flex-col"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <DonateBtn bgcolor="black" txtcolor="white" />
    </div>
  );
}

export default MobileMenu;
