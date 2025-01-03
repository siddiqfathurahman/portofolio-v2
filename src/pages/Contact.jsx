import { Github, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="text-center font-poppins pb-20 bg-slate-100 pt-44 justify-center">
            <h1 className="md:text-5xl text-2xl text-gray-800 font-extrabold max-w-[1000px] mx-auto">
                Looking for an expert to transform your design into a 
                <span className="text-red-800"> responsive</span>, 
                <span className="text-blue-800"> functional</span>, 
                and <span className="text-purple-800">high-quality</span> website? 
                I'm here to bring your vision to life!
                <span className="text-yellow-500"> Let's make it happen!</span>
            </h1>

            <h2 className="md:text-5xl text-3xl font-extrabold mt-12">Hire Me</h2>


            <div className="pt-5 flex justify-center gap-5">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white text-black p-4 rounded-lg shadow-xl hover:bg-gray-100">
                        <Github className="text-gray-800 hover:text-gray-600" size={32} /> 
                        
                    </div>
                </a>

                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white text-pink-500 p-4 rounded-lg shadow-xl hover:bg-gray-100">
                        <Instagram className="text-pink-500 hover:text-pink-400" size={32} />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white text-blue-700 p-4 rounded-lg shadow-xl hover:bg-gray-100">
                        <Linkedin className="text-blue-700 hover:text-blue-600" size={32} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;
