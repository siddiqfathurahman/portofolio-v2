import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("Project");

  const renderContent = () => {
    switch (activeTab) {
      case "Project":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
          </div>
        );
      case "Certificate":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full h-40 bg-blue-300 rounded-lg"></div>
            <div className="w-full h-40 bg-blue-300 rounded-lg"></div>
            <div className="w-full h-40 bg-blue-300 rounded-lg"></div>
          </div>
        );
      case "Tech Stack":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full h-40 bg-green-300 rounded-lg"></div>
            <div className="w-full h-40 bg-green-300 rounded-lg"></div>
            <div className="w-full h-40 bg-green-300 rounded-lg"></div>
            <div className="w-full h-40 bg-green-300 rounded-lg"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 md:px-36 font-poppins bg-slate-100">
      <div className="text-center font-poppins">
        <h1 className="md:text-6xl text-2xl font-bold">Portofolio Showcase</h1>
        <p className="max-w-[730px] mx-auto mt-4 mb-7">Discover my journey through projects, certifications, and technical expertise. Each section highlights a milestone in my ongoing pursuit of knowledge and growth.</p>
      </div>
      {/* Navigation Tabs */}
      <div className="flex justify-between bg-slate-900 text-white p-2 rounded-2xl md:gap-4 gap-1 mb-8">
        <button
          className={`flex-1 md:px-4 px-1 md:py-5 py-2 rounded-lg font-medium md:text-xl text-sm transition text-center ${
            activeTab === "Project" ? "bg-red-800" : " hover:bg-red-800"
          }`}
          onClick={() => setActiveTab("Project")}
        >
            <FaCode className="text-1xl mx-auto mb-1" />
          Project
        </button>
        <button
          className={`flex-1 md:px-4 px-1 md:py-5 py-2 rounded-lg font-medium md:text-xl text-sm transition text-center ${
            activeTab === "Certificate" ? "bg-purple-800" : " hover:bg-purple-800"
          }`}
          onClick={() => setActiveTab("Certificate")}
        >
            <LiaCertificateSolid className="text-1xl mx-auto mb-1"/>
          Certificate
        </button>
        <button
          className={`flex-1 md:px-4 px-1 md:py-5 py-2 rounded-lg font-medium md:text-xl text-sm transition text-center ${
            activeTab === "Tech Stack" ? "bg-yellow-500" : " hover:bg-yellow-500"
          }`}
          onClick={() => setActiveTab("Tech Stack")}
        >
            <GrTechnology className="text-1xl mx-auto mb-1"/>
          Tech Stack
        </button>
      </div>

      {/* Content Section */}
      {renderContent()}
    </div>
  );
};

export default Showcase;
