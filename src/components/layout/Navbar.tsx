import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../utils/constants";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // cambia después de 50px de scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-black/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="ARPA logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-12 drop-shadow-xl" : "h-16 drop-shadow-lg"
            }`}
          />
        </div>

        {/* Links */}
        <div className="flex gap-6 text-white font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}