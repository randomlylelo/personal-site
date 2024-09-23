import { type Config } from "tailwindcss";

// https://colorhunt.co/palette/2c289139a3881c7947fffd95
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C2891",
        secondary: "#39A388",
      }
    }
  }
} satisfies Config;
