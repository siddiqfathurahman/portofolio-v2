import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("Project");
  const [modalImage, setModalImage] = useState(null);

  const techStackData = [
    { img: "/reactjs.svg", ket: "ReactJs" },
    { img: "/nodejs.svg", ket: "Node.js" },
    { img: "/tailwind.svg", ket: "Tailwind CSS" },
    { img: "/javascript.svg", ket: "JavaScript" },
    { img: "/html.svg", ket: "HTML" },
    { img: "/css.svg", ket: "CSS" },
    { img: "/vercel.svg", ket: "Vercel" },
    { img: "/bootstrap.svg", ket: "Bootstrap" },
    { img: "/vite.svg", ket: "Vite" },
  ];

  const certificateData = [
    { img: "/harisenin.jpg" },
    { img: "/revou.jpg" },
    { img: "/dibimbing.jpg" },
    { img: "/resfull.jpg" },
  ];

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
            {certificateData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center cursor-pointer shadow-lg"
                onClick={() => setModalImage(item.img)}
              >
                <img src={item.img} alt="certificatefatur" className="rounded-lg" />
              </div>
            ))}
          </div>
        );
      case "Tech Stack":
        return (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {techStackData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-5 bg-white shadow-xl rounded-lg"
              >
                <img src={item.img} alt={item.ket} className="w-16 h-16 mb-2" />
                <p className="text-lg font-semibold">{item.ket}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 md:px-36 font-poppins bg-slate-100 relative">
      <div className="text-center font-poppins">
        <h1 className="md:text-7xl text-2xl text-blue-900 font-extrabold">Portofolio Showcase</h1>
        <p className="max-w-[730px] mx-auto text-sm md:text-xl mt-2 mb-7">
          Discover my journey through projects, certifications, and technical expertise. Each
          section highlights a milestone in my ongoing pursuit of knowledge and growth.
        </p>
      </div>
      
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
          <LiaCertificateSolid className="text-1xl mx-auto mb-1" />
          Certificate
        </button>
        <button
          className={`flex-1 md:px-4 px-1 md:py-5 py-2 rounded-lg font-medium md:text-xl text-sm transition text-center ${
            activeTab === "Tech Stack" ? "bg-yellow-500" : " hover:bg-yellow-500"
          }`}
          onClick={() => setActiveTab("Tech Stack")}
        >
          <GrTechnology className="text-1xl mx-auto mb-1" />
          Tech Stack
        </button>
      </div>


      {renderContent()}


{/* Modal Certificate */}
{modalImage && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
    <div className="relative">
      <img
        src={modalImage}
        alt="certificate"
        className="rounded-lg max-w-[90vw] max-h-[90vh] object-contain"
      />
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold bg-black rounded-xl w-8 h-8 flex items-center justify-center"
        onClick={() => setModalImage(null)}
      >
        &times;
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Showcase;
