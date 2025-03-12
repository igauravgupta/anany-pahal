import React from 'react';
import { motion } from "framer-motion";

const Impact = () => {
  return (
    <div className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Impact</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-10">
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md w-60 text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-4xl font-bold text-teal-600">10+</h3>
          <p className="mt-2 text-gray-600">Pathshalas</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md w-60 text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-4xl font-bold text-teal-600">200+</h3>
          <p className="mt-2 text-gray-600">Scholarships Provided</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md w-60 text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-4xl font-bold text-teal-600">1000+</h3>
          <p className="mt-2 text-gray-600">Trees Planted</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md w-60 text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-4xl font-bold text-teal-600">50+</h3>
          <p className="mt-2 text-gray-600">Workshops Conducted</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;
