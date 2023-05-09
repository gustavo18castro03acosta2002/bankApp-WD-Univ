/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

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
        "homepage-bg": "url('/background-home-img.jpeg')",
      },
      colors: {
        strongBlue1: "#001233",
        strongBlue2: "#001845",
        strongBlue3: "#002855",
        strongGray1: "#33415C",
        strongGray2: "#5C677D",
        softBlue1: "#0466C8",
        softBlue2: "#0353A4",
        softBlue3: "#023E7D",
        softGray1: "#979DAC",
        softGray2: "#7D8597",
        negative: "#EB7050",
        positive: "#30E0A1",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
