import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Aarav Sharma",
    role: "Co-Founder & Visionary",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "Building a world where education and empowerment go hand in hand.",
  },
  {
    name: "Meera Kapoor",
    role: "Co-Founder & Strategist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Driving sustainable change through knowledge and compassion.",
  },
];

const FoundersNote = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-gray-800 mb-12"
      >
        Founders Note
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-20">
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-sm transition-transform transform hover:scale-105"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-28 h-28 rounded-full mb-5 border-4 border-teal-500 transition-transform transform hover:scale-110"
            />
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
              {founder.name}
            </h3>
            <p className="text-sm text-gray-600">{founder.role}</p>
            <p className="text-gray-500 mt-4 italic text-lg">"{founder.quote}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoundersNote;
