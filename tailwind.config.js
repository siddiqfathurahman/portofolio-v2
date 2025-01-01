/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lilitaone: ["Lilita One", "serif"]
      },
      animation: {
        "bounce-slow": "bounceSlow 3s ease-in-out infinite", 
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" }, 
          "50%": { transform: "translateY(-20px)" },  
        },
      },
    },
  },
  plugins: [],
}
