import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/*"
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#FFFEFC", // background color (off-white)
        secondaryBackground: "#F0F0EF",
        border: "#D9CCC1",
        primaryText: "#938274",
        secondaryText: "#A69383", // Secondary Text color (brownish)
        thrBackground: "#F2E4D8", // light color (pale beige)
        primaryButton: "#729DA6", // medium color (blue-gray)
        secondaryButton: "#D8EEF2",
        primaryButtonHover: "#5B7F86", 
      },
    },
  },
  plugins: [],
};
export default config;