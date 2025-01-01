import React, { useState, useEffect } from "react";

function Hero() {
  const [randomPositions, setRandomPositions] = useState([
    { x: 1800, y: 200, direction: 1 },
    { x: 300, y: 400, direction: -1 },
    { x: 500, y: 100, direction: 1 },
    { x: 50, y: 50, direction: 1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPositions((prev) =>
        prev.map((pos) => {
          const newY = pos.y + pos.direction * 2;
          const newDirection =
            newY > window.innerHeight - 200 || newY < 0
              ? -pos.direction
              : pos.direction;
          return { ...pos, y: newY, direction: newDirection };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col h-[900px] font-poppins justify-center items-center h-screen bg-slate-100 overflow-hidden">
      {randomPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute w-64 h-44 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full pointer-events-none blur-3xl opacity-60"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`
          }}
        ></div>
      ))}


      <img
        src="/1.png"
        alt="Decorative 1"
        className="absolute z-30 md:w-32 md:h-32 w-20 h-20 animate-float"
        style={{ top: "10%", left: "5%" }}
      />
      <img
        src="/2.png"
        alt="Decorative 2"
        className="absolute z-30 md:w-32 md:h-32 w-20 h-20 animate-float"
        style={{ top: "20%", right: "10%" }}
      />
      <img
        src="/3.png"
        alt="Decorative 3"
        className="absolute z-30 md:w-32 md:h-32 w-20 h-20 animate-float"
        style={{ bottom: "20%", right: "10%" }}
      />
      <img
        src="/4.png"
        alt="Decorative 4"
        className="absolute z-30 md:w-32 md:h-32 w-20 h-20 animate-float"
        style={{ bottom: "15%", left: "25%" }}
      />


      <div className="z-20 text-center">
        <h1 className="text-6xl md:text-[160px] font-lilitaone mb-1 font-bold italic bg-gradient-to-r from-blue-800 to-fuchsia-700 bg-clip-text text-transparent">
          Web Developer
        </h1>
        <h2 className="text-sm md:text-2xl font-semibold text-black">
          Muhammad Siddiq Fathurahman
        </h2>
      </div>


      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;