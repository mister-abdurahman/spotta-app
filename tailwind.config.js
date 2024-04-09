/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_white: "#FAFCFD",
        modal_backdrop: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
