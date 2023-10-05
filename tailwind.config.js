/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        font_primary: "#6F7495",
        primary: "#6E4FF6",
        secondary: "#1DC9B7",
      },

      aspectRatio: {
        square: "1",
        "16/9": "16/9",
        "4/3": "4/3",
        "21/9": "21/9",
      },

      fontFamily: {
        workSans: ["Work Sans", "sans"], // Add 'Work Sans' to the sans font family
      },
    },
  },
  plugins: [],
});
