import React from "react";
import { FaHandHoldingHeart, FaBook, FaUsers, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import Initiatives from "./Initiatives";
import Mision from "../routes/Mision";
import CoreValues from "./CoreValues";
import Impact from "./Impact";  

const Vision = () => {
  return (
    <section className="bg-gray-100 text-gray-900 ">

      <div className="text-center py-16 pt-40">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-teal-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Vision
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
        Anany Pahal is an NGO registered under Section 8 of the Companies Act, 2013, with CIN: U85300UP2022NPL159357. We are committed to making a difference in the areas of Education, Healthcare, Environment Protection, and Skill Development.
        </p>
      </div>
      <Initiatives />
      <Mision />
    <CoreValues />  
    <Impact/>
    </section>
  );
};

export default Vision;
