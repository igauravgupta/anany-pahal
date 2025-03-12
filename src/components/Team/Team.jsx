import React from "react";

const founders = [
  {
    name: "Gaurav Gupta",
    role: "Founder & President",
    image: "/founder1.jpg", // Replace with actual image path
    linkedin: "https://linkedin.com/in/gaurav",
  },
  {
    name: "Gurbani Kaur",
    role: "Co-Founder & Vice President",
    image: "/founder2.jpg", // Replace with actual image path
    linkedin: "https://linkedin.com/in/gurbani",
  },
];

const members = [
  { name: "Member 1", role: "Volunteer", image: "/member1.jpg" },
  { name: "Member 2", role: "Coordinator", image: "/member2.jpg" },
  { name: "Member 3", role: "Lead Organizer", image: "/member3.jpg" },
  { name: "Member 4", role: "Event Manager", image: "/member4.jpg" },
];

const Team = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-16 bg-gray-100 pt-30">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Meet Our Team
      </h1>

      {/* Founders Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Founders
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center w-72"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-600"
              />
              <h3 className="text-lg font-semibold mt-4">{founder.name}</h3>
              <p className="text-gray-600">{founder.role}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 font-medium hover:underline"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-600"
              />
              <h3 className="text-lg font-semibold mt-3">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
