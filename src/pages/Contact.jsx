import React, { useState } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <div className="text-center font-poppins pb-20 bg-slate-100 pt-44">
            <h1 className="md:text-5xl text-2xl text-gray-800 font-extrabold px-2 max-w-[1000px] mx-auto">
                Need a professional to create a
                <span className="text-red-800"> responsive</span>,
                <span className="text-blue-800"> functional</span>,
                and <span className="text-purple-800">high-quality</span> website?
                Let's bring your vision to
                <span className="text-yellow-500"> life!</span>
            </h1>

            <h2 className="md:text-5xl text-3xl font-extrabold mt-12">Contact Me 👇</h2>

            <div className="pt-8 flex justify-center items-center gap-4 relative min-h-[100px]">
                <a
                    href="https://www.instagram.com/fatrhmnnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-white text-pink-500 md:p-4 p-3  rounded-lg shadow-xl transition-all duration-300 ${
                        hoveredIcon === 'instagram' ? 'w-[155px]' : 'md:w-[65px] w-[50px]'
                    }`}
                    onMouseEnter={() => handleMouseEnter('instagram')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Instagram size={window.innerWidth < 768 ? 24 : 32} className="flex-shrink-0" />
                    {hoveredIcon === 'instagram' && (
                        <span className="ml-4  text-xs font-semibold text-left">
                            Instagram<br />@fatrhmnnn
                        </span>
                    )}
                </a>

                
                <a
                    href="https://github.com/siddiqfathurahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-white text-black md:p-4 p-3  rounded-lg shadow-xl transition-all duration-300 ${
                        hoveredIcon === 'github' ? 'w-[210px]' : 'md:w-[65px] w-[50px]'
                    }`}
                    onMouseEnter={() => handleMouseEnter('github')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Github size={window.innerWidth < 768 ? 24 : 32} className="flex-shrink-0" />
                    {hoveredIcon === 'github' && (
                        <span className="ml-4 text-xs  text-left font-semibold">
                            GitHub<br />@siddiqfathurahman
                        </span>
                    )}
                </a>

            
                <a
                    href="https://www.linkedin.com/in/MuhammadSiddiqFathurahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-white text-blue-700 md:p-4 p-3  rounded-lg shadow-xl transition-all duration-300 ${
                        hoveredIcon === 'linkedin' ? 'w-[120px]' : 'md:w-[65px] w-[50px]'
                    }`}
                    onMouseEnter={() => handleMouseEnter('linkedin')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Linkedin size={window.innerWidth < 768 ? 24 : 32} className="flex-shrink-0" />
                    {hoveredIcon === 'linkedin' && (
                        <span className="ml-4 flex-col text-xs  justify-center text-left font-semibold">
                            Likedln
                        </span>
                    )}
                </a>
            </div>
        </div>
    );
};

export default Contact;
