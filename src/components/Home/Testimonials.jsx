import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Anany Pahal has truly changed my life. The support and guidance I received helped me achieve my dreams.",
    author: "Amit Sharma",
  },
  {
    quote:
      "The self-study room initiative is incredible! It provides a peaceful environment for students like me to focus.",
    author: "Priya Verma",
  },
  {
    quote:
      "I learned tailoring through their program and now have financial independence. Forever grateful!",
    author: "Sunita Devi",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-100 pt-12 px-6 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-3"></div>
        <h2 className="text-3xl font-bold text-gray-900">
          What People Say About Us
        </h2>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-72 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          >
            <FaQuoteLeft className="text-blue-600 text-3xl mb-3" />
            <p className="text-gray-700 text-base italic">"{testimonial.quote}"</p>
            <p className="mt-4 font-semibold text-gray-900 text-lg">
              – {testimonial.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
