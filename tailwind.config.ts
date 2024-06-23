import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkblue: "#001F3F",
        blue: "#0074D9",
        range: "#FF851B",
        green: "#01FF70",
        red: "#FF4136",
        white: "#F0F0F0",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
