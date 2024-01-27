import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(2rem, 5vw, 6rem)",
        strokeClamp: "clamp(3rem, 10vw, 15rem)",
      },

      fontFamily(utils) {
        return {
          sans: ["Satoshi"],
        };
      },

      colors: {
        primary: "#a2a2a3",
        secondary: "#fff",
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
export default config;
