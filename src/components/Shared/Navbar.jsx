import React, { useState } from "react";
import { Link, useLocation } from "react-router"; // Fixed useLocation import
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "News", path: "/news" },
    { name: "Get In Touch", path: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 text-black bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Logo & Heading */}
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-12 h-auto" />
        <img
          src="/heading2.png"
          alt="Anany Pahal"
          className="w-36 h-auto transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-base font-medium">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`relative transition-all duration-300 px-2 py-1 rounded-md ${
                location.pathname === item.path
                  ? "text-blue-500 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500"
                  : "text-black hover:text-blue-500 hover:font-bold hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Donate Button (Visible on Large Screens) */}
      <div className="hidden md:block">
        <Link to="/donate">
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300">
            Donate Now
          </button>
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg ${
                location.pathname === item.path
                  ? "text-blue-500 font-bold"
                  : "text-black hover:text-red-500 hover:font-bold"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link to="/donate">
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
              Donate Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
