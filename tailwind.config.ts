import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        delagothic: ["Dela Gothic One", "sans"]
      },
      colors: {
        "main-primary-color": "#EC642B",
        "primary-color": "#ED772F",
        "sub-primary-color": "#EF9335",
        black: "#1E1E1E",
        grey: "#AFAC95",
        white: "#E3E7D9"
      }
    }
  },
  plugins: []
};
export default config;
