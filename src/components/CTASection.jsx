import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const CTASection = () => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center bg-cover bg-center px-6 md:px-16"
      style={{ backgroundImage: "url('/cta2.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-2xl text-left text-white">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-lg text-gray-300 tracking-widest uppercase"
        >
          Empowering Change Through Action
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mt-4"
        >
          Join Us in Making a Difference
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <Button 
                      variant="contained" 
                      sx={{ backgroundColor: "#20C997", color: "white", fontWeight: "bold", padding: "10px 20px" }}
                    href="/contact">
                    Get Involved
                    </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
