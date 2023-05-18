import { type Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...defaultColors,
    },
    fontFamily: {
      // lekton: ["var(--font-lekton)", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
