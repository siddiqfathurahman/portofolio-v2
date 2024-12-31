import React, { useState, useEffect } from "react";

function Hero() {
  const [randomPositions, setRandomPositions] = useState([
    { x: 100, y: 200, direction: 1 },
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
    <div className="relative flex flex-col font-poppins justify-center items-center h-screen bg-slate-100 overflow-hidden">
      {/* Lingkaran acak di kiri atas */}
      {randomPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full pointer-events-none blur-3xl opacity-60"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            zIndex: index === 0 ? 20 : 0, // Memastikan lingkaran pertama berada di atas konten
          }}
        ></div>
      ))}

      {/* Konten */}
      <div className="z-20 text-center">
        <h1 className="text-4xl md:text-9xl mb-1 font-bold italic text-blue-700">
          Web Developer
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold text-black">
          Muhammad Siddiq Fathurahman
        </h2>
      </div>
    </div>
  );
}

export default Hero;
