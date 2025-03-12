import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const DonatePage = () => {
    
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!document.querySelector("script[src='https://checkout.razorpay.com/v1/checkout.js']")) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => console.log("Razorpay script loaded successfully.");
      document.body.appendChild(script);
    }
  }, []);
  

  const handleDonate = () => {
    const donationAmount = parseInt(amount, 10); // Convert input value to number

    if (!donationAmount || isNaN(donationAmount) || donationAmount < 1) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const options = {
      key: "your_razorpay_key_id", 
      amount: donationAmount * 100, 
      currency: "INR",
      name: "Anany Pahal",
      description: "Support Our Cause",
      image: "/logo2.png",
      handler: function (response) {
        alert(`Thank you for your donation! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9876543210",
      },
      theme: { color: "#4CAF50" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Support Our Cause</h1>
        <p className="text-gray-600 mb-6">
          Your contribution helps us make a difference in education, healthcare, and sustainability.
        </p>

        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter donation amount (₹)"
          className="w-full p-3 border rounded-lg text-lg mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Donate Now
        </button>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 justify-center text-gray-700 text-2xl">
          <a href="https://www.facebook.com/AnanyPahal" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/ananypahal" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
