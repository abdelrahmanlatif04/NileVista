/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "29ch" }, // Adjust to match the length of your text
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        typing: "typing 3s steps(20) forwards, blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};
