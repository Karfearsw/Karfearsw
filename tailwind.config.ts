import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        catalyst: {
          50: "#eef9ff",
          100: "#d9f1ff",
          500: "#0ea5e9",
          600: "#0284c7",
          900: "#0c4a6e"
        }
      }
    }
  },
  plugins: []
};

export default config;
