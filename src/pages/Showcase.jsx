import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("Project");
  const [modalImage, setModalImage] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

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
    { img: "/nextjs.png", ket: "Next Js" },
    { img: "/ts.png", ket: "TypeScript" },
  ];

  const certificateData = [
    { img: "/harisenin.jpg" },
    { img: "/revou.jpg" },
    { img: "/dibimbing.jpg" },
    { img: "/resfull.jpg" },
  ];

  const projectData = [
    {
      img: "/masjidalanhar.png",
      title: "Masjid AL-ANHAR",
      desk: "The mosque website is a digital platform that provides an integrated prayer schedule API and a complete digital Quran with translations and Latin script, making it easier for worshippers to perform their prayers and access mosque information.",
      tech1: { icon: <FaReact />, name: "ReactJs" },
      tech2: { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      demo: "https://masjid-al-anhar.vercel.app",
    },
    {
      img: "/cv.png",
      title: "Layanan Pembuatan CV",
      desk: "The CV creation service website is a platform that helps users create professional CVs quickly and easily. This website is designed to enhance users' career opportunities.",
      tech1: { icon: <FaReact />, name: "ReactJs" },
      tech2: { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      demo: "https://layanancv-web.vercel.app/",
    },
    {
      img: "/homify.png",
      title: "Layanan Smart Home",
      desk: "The smart home service website is a digital platform offering home automation solutions for security, energy efficiency, and comfort. Equipped with features like smart device control, remote monitoring, and integration with the latest technologies, this website makes it easier for users to manage their homes intelligently and practically",
      tech1: { icon: <FaReact />, name: "ReactJs" },
      tech2: { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      demo: "https://homify-web.vercel.app/",
    },
    {
      img: "/fahost.png",
      title: "Layanan Cloud",
      desk: "The cloud service website is a platform that offers data storage, computing, and cloud-based digital infrastructure services. With features like scalability, high security, and flexible access, this website supports individuals and businesses in managing data and applications efficiently.",
      tech1: { icon: <FaReact />, name: "ReactJs" },
      tech2: { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      demo: "https://fahost.vercel.app/",
    },
    {
      img: "/ayamgeprek.png",
      title: "Ayam Geprek",
      desk: "The Ayam Geprek MSME website serves as a digital platform to promote signature menu items, accept online orders, and reach a broader customer base. It is designed with features like a product gallery, promotional information, and updates about its branches",
      tech1: { icon: <FaHtml5 />, name: "HTML" },
      tech2: { icon: <FaCss3Alt />, name: "CSS" },
      demo: "https://ayamgeprek.vercel.app/",
    },
    {
      img: "/portov1.png",
      title: "Portofolio-v1",
      desk: "Portfolio-v1 is the first website I created to showcase my work and personal experiences. With a simple yet functional design, this website serves as my first step in introducing myself professionally in the digital world.",
      tech1: { icon: <FaHtml5 />, name: "HTML" },
      tech2: { icon: <FaCss3Alt />, name: "CSS" },
      demo: "https://portofolio-fatur-v1.vercel.app/",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Project":
        const visibleProjects = showAllProjects ? projectData : projectData.slice(0, 4);
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-xl overflow-hidden shadow-xl flex flex-col h-full"
                >
                  <div className="relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full md:h-72 h-48 rounded-lg object-cover p-4"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold -mt-5 mb-2">{project.title}</h2>
                    <p className="text-sm mb-4 flex-grow">{project.desk}</p>
                    <div className="flex gap-2">
                    {project.tech1.name === "ReactJs" && (
                    <h2 className="bg-blue-800 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech1.icon}
                        {project.tech1.name}
                    </h2>
                    )}
                    {project.tech1.name === "Tailwind CSS" && (
                    <h2 className="bg-red-800 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech1.icon}
                        {project.tech1.name}
                    </h2>
                    )}
                    {project.tech1.name === "HTML" && (
                    <h2 className="bg-yellow-500 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech1.icon}
                        {project.tech1.name}
                    </h2>
                    )}  
                    {project.tech1.name === "CSS" && (
                    <h2 className="bg-purple-800 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech1.icon}
                        {project.tech1.name}
                    </h2>
                    )}
                    {project.tech2.name === "ReactJs" && (
                    <h2 className="bg-blue-800 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech2.icon}
                        {project.tech2.name}
                    </h2>
                    )}
                    {project.tech2.name === "Tailwind CSS" && (
                    <h2 className="bg-red-800 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech2.icon}
                        {project.tech2.name}
                    </h2>
                    )}
                    {project.tech2.name === "HTML" && (
                    <h2 className="bg-yellow-500 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech2.icon}
                        {project.tech2.name}
                    </h2>
                    )}
                    {project.tech2.name === "CSS" && (
                    <h2 className="bg-purple-800 text-white py-1 text-sm px-2 flex gap-2 items-center rounded-lg">
                        {project.tech2.icon}
                        {project.tech2.name}
                    </h2>
                    )}
                </div>

                <div className="flex justify-end pt-3">
                    <a
                        href={project.demo}
                        className="text-blue-800 hover:underline flex items-center gap-2"
                        >
                        Live Demo <FaArrowUpRightFromSquare className="" />
                    </a>
                </div>

                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              {showAllProjects ? (
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="flex items-center gap-2 mx-auto bg-red-800 text-white px-4 py-2 rounded-lg"
                >
                  See Less <FaChevronUp />
                </button>
              ) : (
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="flex items-center gap-2 mx-auto bg-purple-800 text-white px-4 py-2 rounded-lg"
                >
                  See All <FaChevronDown />
                </button>
              )}
            </div>
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
                <img src={item.img} alt="certificate" className="rounded-lg" />
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
    <div className="p-8 md:px-36 px-3 font-poppins bg-slate-100 relative">
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
