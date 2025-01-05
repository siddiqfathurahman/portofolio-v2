import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Profil = () => {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:px-8 md:pt-40 py-10 bg-slate-100 font-poppins">
        <div className="w-full flex justify-center mb-4 md:mb-0">
          <img
            src="/profil.png"
            alt="Placeholder"
            className="w-[550px]"
          />
        </div>
  
        <div className="w-full md:mt-10">
          <h1 className="md:text-4xl text-3xl font-extrabold mb-2">My Web <span className="text-blue-900">Development Journey</span></h1>
          <p className="text-black leading-relaxed mb-2">
          I am a passionate Web Developer dedicated to crafting websites that are not only visually appealing but also responsive, fast, and highly functional. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I bring your digital ideas to life with precision and creativity.
          </p>
          <p>My commitment is to deliver unique projects that make a positive impact on your business or goals. Let’s bring your vision to reality! 🚀</p>
          <div className="flex items-center pt-2 gap-1">
            <MdOutlineMail className="text-xl" />
            <p>siddiqfathurahman@gmail.com</p>
          </div>
          <div className="flex pt-5 gap-5">
            <a href="/cv-muhsiddiqfathurahman.pdf" download className="bg-purple-700 text-white text-sm md:text-xl p-3 flex items-center gap-2 font-semibold rounded-2xl"><MdOutlineFileDownload className="text-2xl"/>Download CV</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profil;