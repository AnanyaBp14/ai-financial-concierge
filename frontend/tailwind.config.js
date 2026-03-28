/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // scan all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6FCF97",
        background: "#F9FAFB",
        card: "#FFFFFF",
        accent: "#E8F5E9",
      },
      borderRadius: {
        xl2: "1.5rem", // extra smooth rounded corners
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};