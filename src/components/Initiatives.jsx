import React from "react";
import { motion } from "framer-motion";

const initiatives = [
  { name: "Anany Pathshala", description: "To educate underprivileged students and provide them stationery materials monthly." },
  { name: "Anany Digitalshala", description: "To provide digital education free of cost for students up to class 12." },
  { name: "Tailoring Center", description: "To provide free tailoring training to people below the poverty line." },
  { name: "Self Study Room", description: "A space to study without disturbance." },
  { name: "Anany Taru", description: "For tree plantation initiatives." },
  { name: "Anany Paavan Vaarta", description: "To spread awareness about girls' menstrual health and hygiene." },
  { name: "Anany Arogya Seva", description: "To spread awareness about common diseases and provide preventive health kits." },
  { name: "Anany Kabaad Dhan", description: "To prevent polythene waste from getting dumped in soil." },
  { name: "Anany Daana", description: "To provide a nutritious diet for stray animals." },
  { name: "Anany Vaarta", description: "Talks about village issues and their solutions." },
  { name: "Anany Digital Camp", description: "Helping elders, widows, and orphans get benefits from government schemes." },
];

const Initiatives = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-gray-900">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-4xl font-extrabold text-teal-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Initiatives
        </motion.h2>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-teal-500"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-teal-600">{initiative.name}</h3>
            <p className="mt-2 text-gray-700">{initiative.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;
