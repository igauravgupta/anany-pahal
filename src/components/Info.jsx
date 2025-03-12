import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const initiatives = [
    {
      title: "Empowering Education",
      description:
        "Providing free academic support and coaching to underprivileged children through Anany Pathshala & DigitalShala.",
    },
    {
      title: "Skill Development",
      description:
        "Offering free tailoring training and self-study spaces for skill enhancement and financial independence.",
    },
    {
      title: "Health & Hygiene Awareness",
      description:
        "Organizing menstrual hygiene programs and preventive health campaigns to improve community well-being.",
    },
  ];

  return (
    <section className="w-full px-16 py-20 bg-gray-100 flex flex-col md:flex-row md:items-start gap-12">
      {/* Left Section: Title & Description */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-teal-500 text-lg uppercase font-semibold tracking-wide">
          About Anany Pahal
        </h3>
        <h1 className="text-4xl font-bold mt-3 leading-snug">
          Making a Difference Through Service & Compassion
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Anany Pahal is dedicated to empowering communities through education,
          healthcare, skill development, and environmental protection. Our
          initiatives aim to create a sustainable impact in society.
        </p>
      </motion.div>

      {/* Right Section: Initiatives */}
      <div className="md:w-1/2 flex flex-col gap-8">
        {initiatives.map((item, index) => (
          <motion.div
            key={index}
            className="border-t pt-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Info;