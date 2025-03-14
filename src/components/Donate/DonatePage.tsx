import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const DonatePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          We are working on our donation platform. Stay tuned for updates!
        </p>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 justify-center text-gray-700 text-2xl">
          <a href="https://www.facebook.com/AnanyPahal" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/ananypahal" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
