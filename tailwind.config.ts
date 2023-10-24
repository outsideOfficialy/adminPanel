import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans"],
      },
      colors: {
        "main-color": "#EC642B",
        "primary-color": "#ED772F",
        "sub-primary-color": "#EF9335",
        "black": "#1E1E1E",
        "grey": "#AFAC95",
        "white": "#E3E7D9"
      }
    },
  },
  plugins: [],
}
export default config
