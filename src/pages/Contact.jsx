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
        <div className="text-center font-poppins pb-20 bg-slate-100 pt-44 justify-center">
            <h1 className="md:text-5xl text-2xl text-gray-800 font-extrabold px-2 max-w-[1000px] mx-auto">
                Need a professional to create a 
                <span className="text-red-800"> responsive</span>, 
                <span className="text-blue-800"> functional</span>, 
                and <span className="text-purple-800">high-quality</span> website? 
                Let's bring your vision to 
                <span className='text-yellow-500'> life!</span>
            </h1>

            <h2 className="md:text-3xl text-3xl font-extrabold mt-12">Hire Me</h2>

            <div className="pt-5 flex justify-center gap-2">
                <a
                    href="https://www.instagram.com/fatrhmnnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-white text-pink-500 p-4 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 ${
                        hoveredIcon === 'instagram' ? 'w-[200px]' : 'w-[60px]'
                    }`}
                    onMouseEnter={() => handleMouseEnter('instagram')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Instagram size={32} className="flex-shrink-0" />
                    {hoveredIcon === 'instagram' && (
                        <span className="ml-4 text-sm font-semibold text-left text-black">
                            Instagram<br />@fatrhmnnn
                        </span>
                    )}
                </a>


                <a
                    href="https://github.com/siddiqfathurahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-white text-black p-4 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 ${
                        hoveredIcon === 'github' ? 'w-[230px]' : 'w-[60px]'
                    }`}
                    onMouseEnter={() => handleMouseEnter('github')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Github size={32} className="flex-shrink-0" />
                    {hoveredIcon === 'github' && (
                        <span className="ml-4 text-sm text-left font-semibold text-gray-800">
                            GitHub<br />@siddiqfathurahman
                        </span>
                    )}
                </a>

                <a
                    href="https://www.linkedin.com/in/MuhammadSiddiqFathurahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-white text-blue-700 p-4 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 ${
                        hoveredIcon === 'linkedin' ? 'w-[200px]' : 'w-[60px]'
                    }`}
                    onMouseEnter={() => handleMouseEnter('linkedin')}
                    onMouseLeave={handleMouseLeave}
                >
                    <Linkedin size={32} className="flex-shrink-0" />
                    {hoveredIcon === 'linkedin' && (
                        <span className="ml-4 text-sm font-semibold text-blue-700">
                            Click To Likedln
                        </span>
                    )}
                </a>
            </div>
        </div>
    );
};

export default Contact;
