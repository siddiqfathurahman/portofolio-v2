import BlurText from "./BlurText";

const Loading = ({ fadeOut }) => {
  return (
    <div
      className={`flex pl-4 font-poppins items-center justify-center h-screen bg-white text-purple-800 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <BlurText
        text="Welcome to My Portfolio"
        delay={300}
        animateBy="words"
        direction="top"
        className="text-5xl font-extrabold"
      />
    </div>
  );
};

export default Loading;
