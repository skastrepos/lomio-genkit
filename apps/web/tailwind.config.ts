import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151716",
        mist: "#F6FAF7",
        leaf: "#2A9D8F",
        ember: "#E76F51"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(21, 23, 22, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
