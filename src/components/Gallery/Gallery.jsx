import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-40">
      <motion.h1 
        className="text-4xl  font-extrabold text-center text-blue-600 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey Through Moments 
      </motion.h1>

      {/* Timeline Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {/* Event 1 */}
        <motion.div 
          className="relative bg-white shadow-lg rounded-xl p-4 w-full max-w-sm border-l-4 border-blue-700 transform transition-all hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-700">Community Clean-Up Drive</h3>
          <p className="text-sm text-gray-500 mt-1">📅 Jan 15, 2025</p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Volunteers gathered to clean public spaces, making our community a better place.
          </p>
          {/* Social Media Links */}
          <div className="flex justify-start gap-3 mt-3">
            <a href="https://www.instagram.com/ananypahal" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:scale-125 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/AnanyPahal" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:scale-125 transition-transform">
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Event 2 */}
        <motion.div 
          className="relative bg-white shadow-lg rounded-xl p-4 w-full max-w-sm border-l-4 border-green-600 transform transition-all hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-600">Educational Workshop</h3>
          <p className="text-sm text-gray-500 mt-1">📅 Feb 10, 2025</p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            A day dedicated to teaching and inspiring young minds with interactive learning sessions.
          </p>
          {/* Social Media Links */}
          <div className="flex justify-start gap-3 mt-3">
            <a href="https://www.instagram.com/ananypahal" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:scale-125 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/AnanyPahal" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:scale-125 transition-transform">
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Event 3 */}
        <motion.div 
          className="relative bg-white shadow-lg rounded-xl p-4 w-full max-w-sm border-l-4 border-teal-600 transform transition-all hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-teal-600">Tree Plantation Drive</h3>
          <p className="text-sm text-gray-500 mt-1">📅 March 5, 2025</p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            We planted over 500 trees to promote environmental sustainability and a greener future.
          </p>
          {/* Social Media Links */}
          <div className="flex justify-start gap-3 mt-3">
            <a href="https://www.instagram.com/ananypahal" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:scale-125 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/AnanyPahal" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:scale-125 transition-transform">
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;