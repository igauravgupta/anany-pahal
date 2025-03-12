import React from "react";
import { motion } from "framer-motion";

const Mision = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <motion.h2
        className="text-4xl font-extrabold text-blue-600 text-center" // Centered heading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Mission
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">
            Education for All
          </h3>
          <p className="mt-2">
            We provide free academic support, digital literacy programs, and scholarships to ensure equal learning opportunities.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">
            Skill Development
          </h3>
          <p className="mt-2">
            Our vocational training initiatives help individuals gain financial independence through various skills.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">
            Health & Hygiene
          </h3>
          <p className="mt-2">
            We spread awareness about menstrual hygiene, disease prevention, and provide health kits to those in need.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg p-6 rounded-xl"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">
            Environment Protection
          </h3>
          <p className="mt-2">
            Our tree plantation drives and waste management initiatives promote sustainability for future generations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mision;
