import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Features from "./Features";
import CTASection from "./CTASection";
import Info from "./Info"
import Testimonials from "./Testimonials";
import {Link} from "react-router"

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen w-full bg-gray-100 bg-center py-20 px-4">
        <div className="absolute inset-0 bg-gray-100 opacity-60"></div>

        {/* Hero Content */}
        <motion.img 
          src="/logo2.png"
          alt="NGO Logo"
          className="relative w-50 h-50 mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.h1
          className="relative text-blue-600 text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hope. Help. Humanity.
        </motion.h1>

        <motion.p
          className="relative text-gray-700 mb-8 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Lives Through Education & Development
        </motion.p>

        <motion.div 
          className="relative flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
         <Link to="/vision"> 
         <Button variant="contained" color="primary" sx={{ padding: "10px 20px" }}
    >
            Our Vision
          </Button></Link>
          <Link to="/contact">
                   <Button 
                               variant="contained" 
                               sx={{ backgroundColor: "#20C997", color: "white", fontWeight: "bold", padding: "10px 20px" }}
                            >
                             Get Involved
                             </Button></Link>
        </motion.div>
      </section>
  <Info/>
<CTASection />

      <Features />
      <Testimonials />
    </>
  );
};

export default Hero;