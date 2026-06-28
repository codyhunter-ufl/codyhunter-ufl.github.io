/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f1ea",
        ink: "#2f2a24",
        muted: "#6a6258",
        moss: "#3f5a3f",
        line: "#ddd6c9",
        chip: "#e7e1d6",
        hover: "#ece6db"
      },
      maxWidth: {
        site: "900px"
      }
    }
  },
  plugins: []
};
