import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const orgLinks = [
    { label: "About Us", path: "#about-us" },
    { label: "Our Work", path: "#our-work" },
    { label: "Impact", path: "#impact" },
    { label: "Stories & Updates", path: "#stories-updates" },
  ];

  const partnerLinks = [
    { label: "CSR Partnerships", path: "#csr-partnership" },
    { label: "Volunteer With Us", path: "#csr-partnership" },
    { label: "Make a Donation", path: "#contact-us" },
    { label: "Contact", path: "#contact-us" },
  ];

  const programmeLinks = [
    { label: "Sports Academy", path: "#our-work" },
    { label: "Creative Development", path: "#our-work" },
    { label: "Vocational Training", path: "#our-work" },
    { label: "Health Camps", path: "#our-work" },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-200 py-12 px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-neutral-700 pb-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-3 text-white">ASVSS</h2>
          <p className="text-sm leading-relaxed">
            Anandapur Swami Vivekananda Seva Samity <br />
            Est. 12 January 2007, Kolkata
          </p>
          <p className="italic text-orange-600 mt-3">"Service to Mankind."</p>
          <p className="text-sm mt-4">
            Reg. No. SO250551 <br />
            CSR Reg. No. CSR00056917 <br />
            Anandapur, East Kolkata, West Bengal
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["SPORTS", "HEALTH", "WOMEN", "BEES"].map((tag) => (
              <span
                key={tag}
                className="border border-orange-600 text-orange-600 px-3 py-1 text-xs font-semibold rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Organisation */}
        <div>
          <h4 className="uppercase text-sm font-semibold text-neutral-400 mb-3">
            Organisation
          </h4>
          <ul className="space-y-2 text-sm">
            {orgLinks.map((link) => (
              <li key={link.label}>
                {link.path.startsWith("#") ? (
                  <a
                    href={link.path}
                    className="hover:text-orange-600 transition"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.path} className="hover:text-orange-600 transition">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4 className="uppercase text-sm font-semibold text-neutral-400 mb-3">
            Partners
          </h4>
          <ul className="space-y-2 text-sm">
            {partnerLinks.map((link) => (
              <li key={link.label}>
                {link.path.startsWith("#") ? (
                  <a
                    href={link.path}
                    className="hover:text-orange-600 transition"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.path} className="hover:text-orange-600 transition">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="uppercase text-sm font-semibold text-neutral-400 mb-3">
            Programmes
          </h4>
          <ul className="space-y-2 text-sm">
            {programmeLinks.map((link) => (
              <li key={link.label}>
                {link.path.startsWith("#") ? (
                  <a
                    href={link.path}
                    className="hover:text-orange-600 transition"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.path} className="hover:text-orange-600 transition">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 text-sm">
        <p className="text-neutral-400 mb-4 lg:mb-0">
          © 2026 Anandapur Swami Vivekananda Seva Samity. All rights reserved.
        </p>
        <a
          href="#contact"
          className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-2 rounded flex items-center gap-2"
        >
          SUPPORT ASVSS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
