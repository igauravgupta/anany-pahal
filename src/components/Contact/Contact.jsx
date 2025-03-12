import React from "react";
import { Button, TextField } from "@mui/material";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 p-12 gap-16 min-h-screen items-center pt-20">
      {/* Left Section - Contact Details */}
      <div className="text-left">
        <h2 className="text-4xl font-bold text-gray-900">
          Get in Touch with Anany Pahal
        </h2>
        <p className="text-gray-600 mt-3">
          Reach out to us for collaborations, volunteering, or any queries regarding our initiatives.
        </p>
        <div className="mt-6 space-y-2 text-gray-700">
          <p><strong>Address:</strong> 2360 Hood Avenue, San Diego, CA, 92123</p>
          <p><strong>Phone:</strong> 202-555-0188</p>
          <p><strong>Email:</strong> contact@ananypahal.org</p>
        </div>
        <div className="mt-6">
          <p className="font-semibold">Follow Us:</p>
          <div className="flex gap-4 mt-2 text-xl text-gray-700">
  <a href="https://www.facebook.com/AnanyPahal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
    <FaFacebook />
  </a>
  <a href="https://www.instagram.com/ananypahal" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
    <FaInstagram />
  </a>
  <a href="https://www.youtube.com/channel/UCXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
    <FaYoutube />
  </a>
</div>

        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white p-10 shadow-lg rounded-md max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Anany Pahal Team
        </h2>
        <form className="flex flex-col gap-4">
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField label="Your Message" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" sx={{ backgroundColor: "blue-600" }}>
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
