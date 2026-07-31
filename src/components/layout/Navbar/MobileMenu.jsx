import React from "react";
import { HiOutlineX } from "react-icons/hi";
import NavLinks from "./NavLinks";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  return (
    <div className={`fixed inset-0 z-50 transition-transform duration-300 
      ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >


      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
      >
      
      </div>

      {/* Menu */}
      <div className={`absolute top-0 right-0 h-screen w-[85%] max-w-sm bg-secondary border border-white/10 shadow-2xl transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`
      }
      
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">&lt;VS/&gt;</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 mt-10">
          <NavLinks mobile />
        </div>

        {/* CTA */}
        <div className="px-6 mt-10">
          <button
            className="w-full py-3 rounded-full bg-accent text-white font-medium"
          >
            Let's Talk
          </button>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;
