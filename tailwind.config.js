/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        LightRed: "hsl(356, 100%, 66%)",
        VeryLightRed: "hsl(355, 100%, 74%)",
        VeryDarkBlue: "hsl(208, 49%, 24%)",

        GrayishBlue: "hsl(240, 2%, 79%)",
        VeryDarkGrayishBlue: "hsl(207, 13%, 34%)",
        VeryDarkBlackBlue: "hsl(240, 10%, 16%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-pattern-intro-desktop.svg')",
        "hero-pattern-mobile": "url('/src/assets/bg-pattern-intro-mobile.svg')",
        "primary-gradient":
          "linear-gradient(180deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
        "secondary-gradient":
          "linear-gradient(180deg,hsl(13, 100%, 72%),hsl(353, 100%, 62%))",
      },
    },
  },
  plugins: [],
};
