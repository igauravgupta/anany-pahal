import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-gray-100 text-black text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Anany Pahal. All Rights Reserved.</p>
      <p className="mt-2">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/gaurav-gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          igauravgupta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
