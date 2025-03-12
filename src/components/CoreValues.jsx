import recat from 'react';
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaBook, FaUsers, FaLeaf } from "react-icons/fa";
const CoreValues = () => {
    return (
        <div className="bg-gray-200 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Core Values</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 text-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaHandHoldingHeart className="text-teal-500 text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Compassion</h3>
            <p className="mt-2 text-gray-600">Helping with empathy and kindness.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 text-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaBook className="text-teal-500 text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Education</h3>
            <p className="mt-2 text-gray-600">Spreading knowledge for empowerment.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 text-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaUsers className="text-teal-500 text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Community</h3>
            <p className="mt-2 text-gray-600">Creating a support system for all.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-64 text-center"
            whileHover={{ scale: 1.1 }}
          >
            <FaLeaf className="text-teal-500 text-5xl" />
            <h3 className="mt-3 text-xl font-semibold">Sustainability</h3>
            <p className="mt-2 text-gray-600">Caring for the environment.</p>
          </motion.div>
        </div>
      </div>
    )}

    export default CoreValues;  