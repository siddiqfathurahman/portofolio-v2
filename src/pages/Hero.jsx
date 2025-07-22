import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative flex flex-col h-[900px] font-poppins justify-center items-center h-screen bg-slate-100 overflow-hidden">
        {/* <div className="absolute -top-10 -right-10 md:w-80 md:h-72 w-48 h-48 bg-gradient-to-bl from-[#991b1b] via-[#dc2626] to-[#f87171] blur-3xl opacity-70"></div> */}
        <img
          src="/1.png"
          alt="Decorative 1"
          className="absolute z-30 md:w-32 md:h-32 w-16 h-16 animate-float"
          style={{ top: "10%", left: "5%", animationDelay: "0s" }}
          data-aos="fade-in"
        />
        <img
          src="/2.png"
          alt="Decorative 2"
          className="absolute z-30 blur-sm md:w-32 md:h-32 w-16 h-16 animate-float"
          style={{ top: "20%", right: "10%", animationDelay: "0.5s" }}
          data-aos="fade-in"
        />
        <img
          src="/3.png"
          alt="Decorative 3"
          className="absolute z-30 md:w-32 md:h-32 w-16 h-16 animate-float"
          style={{ bottom: "20%", right: "10%", animationDelay: "1s" }}
          data-aos="fade-in"
        />
        <img
          src="/4.png"
          alt="Decorative 4"
          className="absolute z-30 md:w-32 blur-sm md:h-32 w-16 h-16 animate-float"
          style={{ bottom: "15%", left: "25%", animationDelay: "1.5s" }}
          data-aos="fade-in"
        />

        <div data-aos="fade-in" className="z-40 text-center">
          <h1 className="text-6xl lg:text-10xl md:text-[140px] font-lilitaone font-bold mb-1 text-blue-700">
            WEB <span className="">DEVELOPER</span>
          </h1>
          <h2 className="text-xs md:text-2xl font-semibold border-2 inline-block border-red-800 py-1 px-3 rounded-xl text-black">
            Muhammad Siddiq Fathurahman
          </h2>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Hero;
