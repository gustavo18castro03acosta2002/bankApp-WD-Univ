/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/Images/background-home-img.jpg')",
      },
      colors: {
        primary: "#171717",
        btnSecondary: "#3D3B3B",
        negative: "#EB7050",
        positive: "#30E0A1",
      },
    },
  },
  plugins: [],
};
