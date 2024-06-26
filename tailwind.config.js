/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-top': 'center top',
      },
      colors: {
        // Dark
        bgDarkMode: "#FFFFFF",
        txtDarkMode: "#000000",
        
        // Light
        bgLightMode: "#000000",
        txtLightMode: "#FFFFFF",
        txtHeadingLightMode: "text-blue-900"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
