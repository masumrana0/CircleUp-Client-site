import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1c1135",
        primary: "6e28db",
        secondary: "#ffffff",
        tertiary: "#cfcfcf",
      },
    },
  },
  plugins: [],
};
export default config;
