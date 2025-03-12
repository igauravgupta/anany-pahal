import React from "react";
import { motion } from "framer-motion";

const values = [
  { number: "01", title: "Empowering Education", description: "Providing free learning opportunities for a brighter future." },
  { number: "02", title: "Community Upliftment", description: "Creating self-sufficient communities through skill development & awareness." },
  { number: "03", title: "Sustainability & Well-being", description: "Advocating for a greener environment and better health for all." },
];

const Features = () => {
  return (
    <section className="py-20 text-center bg-gray-100 pb-30">
      <h2 className="text-blue-600 uppercase tracking-wide mb-2">Anany Pahal’s Commitment</h2>
      <h2 className="text-4xl font-bold mb-10">Driving Positive Change, One Initiative at a Time</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-left"
          >
            <p className="text-blue-600 text-lg font-semibold">{value.number}</p>
            <h3 className="text-xl font-semibold my-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
