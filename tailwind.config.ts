import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      fg: "#05030D",
      bg: "#0F131E",
      line: "#7D8698",
      white: "#FFFFFF"
    }
  },
  plugins: [],
};
export default config;
