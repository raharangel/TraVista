export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F7C5C",
        bg: "#F6F7F6",
        text: "#2F2F2F",
        muted: "#7A7A7A",
        border: "#E5E7EB",
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
