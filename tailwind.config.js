/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounceSlow 3s ease-in-out infinite", // Animasi gerakan naik-turun
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" }, // Posisi awal dan akhir
          "50%": { transform: "translateY(-20px)" },  // Gerakan ke atas
        },
      },
    },
  },
  plugins: [],
}
