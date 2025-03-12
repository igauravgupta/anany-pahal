import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Vision", path: "/vision" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 text-black absolute top-0 left-0 z-50 bg-gray-100 shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/heading2.png"
          alt="Anany Pahal"
          className="w-32 h-auto transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 uppercase text-sm font-semibold">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`relative transition ${
                location.pathname === item.path
                  ? "text-[#20C997] font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[#20C997]"
                  : "text-black hover:text-gray-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Donate Button (Visible on Large Screens) */}
      <div className="hidden md:block">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#20C997", color: "white", fontWeight: "bold" }}
        >
          Donate Now
        </Button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-gray-100 shadow-md md:hidden flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg ${
                location.pathname === item.path
                  ? "text-[#20C997] font-bold"
                  : "text-black hover:text-gray-500"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Donate Button (Visible on Mobile) */}
          <Button
            variant="contained"
            sx={{ backgroundColor: "#20C997", color: "white", fontWeight: "bold" }}
          >
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
