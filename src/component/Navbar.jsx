import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 
                bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                backdrop-blur-xl border-b border-white/10"
      >
        {/* Glow Background */}
        <div className="absolute w-72 h-72 bg-purple-500 blur-3xl opacity-10 -top-20 -left-20"></div>
        <div className="absolute w-72 h-72 bg-indigo-500 blur-3xl opacity-10 -top-20 -right-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide text-white">
            <Link
              to="/"
              className="bg-gradient-to-r font-serif italic from-indigo-400 to-purple-500 bg-clip-text text-transparent"
            >
              Sam Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 text-base font-medium text-gray-300">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`relative pb-2 transition duration-300  font-serif
            ${
              location.pathname === item.path
                ? "text-white after:w-full"
                : "hover:text-white after:w-0"
            }
            after:absolute after:left-0 after:bottom-0 
            after:h-[2px] after:bg-gradient-to-r 
            after:from-indigo-500 after:to-purple-500
            after:transition-all after:duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white cursor-pointer">
            <Menu size={28} onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                backdrop-blur-xl tracking-tight text-white text-gray-800 z-50 shadow-xl transform transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-serif tracking-tight text-white">Menu</h2>
          <X
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col p-6 space-y-6 text-base font-medium">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block transition ${
                  location.pathname === item.path
                    ? "text-[#b76d68] font-semibold"
                    : "hover:text-[#b76d68]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
