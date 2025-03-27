import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Initiatives = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-blue-500 py-8 mt-16 flex justify-center items-center text-center">
        <h1 className="text-white text-4xl font-bold w-full">Initiatives</h1>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row gap-6">
        <MainContent />
        <Sidebar />
      </div>
    </>
  );
};

export default Initiatives;
