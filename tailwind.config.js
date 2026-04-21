/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F7C5C",      // your green
        primarySoft: "#E8F2EC",  // light green bg
        textMain: "#2F2F2F",
        textSoft: "#7A7A7A",
        borderSoft: "#E5E7EB",
        bgMain: "#F6F7F6",
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.05)",
      }
    },
  },
  plugins: [],
};