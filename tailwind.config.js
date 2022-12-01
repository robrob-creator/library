/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: ["10px", "16px"],
      },
      spacing: {
        120: "440px",
        122: "540px",
        123: "580px",
        124: "600px",
        126: "700px",
        128: "832px",
      },
      screens: {
        mobile: "414px",
        // => @media (min-width: 414px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
