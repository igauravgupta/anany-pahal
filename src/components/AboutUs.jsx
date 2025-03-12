import React from "react";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gray-100 bg-center">
      {/* About Us Section (Properly Positioned) */}
      <div className="relative bg-gray-200 shadow-lg rounded-lg w-4/5 md:w-2/3 flex overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8">
          <h4 className="text-sm font-semibold text-teal-500 uppercase">
            About Us
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mt-2">
            Empowering Lives Through Education & Development
          </h2>
          <p className="text-gray-700 mt-4">
            Anany Pahal is a registered NGO working in the fields of 
            <strong> education, healthcare, environmental protection, and skill development</strong>. 
            We are committed to uplifting underprivileged communities through 
            <strong> free academic coaching, vocational training, and awareness programs</strong>.
          </p>
          <p className="text-gray-700 mt-4">
            Our current focus is <strong>free academic and residential preparation</strong> for students aiming 
            to get into <strong>Jawahar Navodaya Vidyalaya, Deendayal School, Atal Awasiya Vidyalaya,</strong> 
            and <strong>Pandit Deendayal Upadhyaya Rajkiya Ashram Padhati School</strong>, along with 
            <strong> free coaching for primary-level students.</strong>
          </p>
          <a 
            href="https://ananypahal.org/" 
            className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition inline-block"
          >
            Learn More
          </a>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/about.jpeg" 
            alt="About Us - Anany Pahal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
