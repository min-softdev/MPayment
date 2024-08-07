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
        "active-gradient":
          "linear-gradient(to right, var(--color-gradient), var(--color-gradient-50))",
        "progress-active-gradient":
          "linear-gradient(to right, #3D4A7C, #7E49A8)",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },
        btn: {
          DEFAULT: "var(--color-btn)",
          50: "var(--color-btn-50)",
          100: "var(--color-btn-100)",
          200: "var(--color-btn-200)",
          300: "var(--color-btn-300)",
          400: "var(--color-btn-400)",
          500: "var(--color-btn-500)",
          600: "var(--color-btn-600)",
          700: "var(--color-btn-700)",
          800: "var(--color-btn-800)",
          900: "var(--color-btn-900)",
        },
        typo: {
          DEFAULT: "var(--color-typo)",
          50: "var(--color-typo-50)",
          100: "var(--color-typo-100)",
          200: "var(--color-typo-200)",
          300: "var(--color-typo-300)",
          400: "var(--color-typo-400)",
          500: "var(--color-typo-500)",
          600: "var(--color-typo-600)",
          700: "var(--color-typo-700)",
          800: "var(--color-typo-800)",
          900: "var(--color-typo-900)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          50: "var(--color-card-50)",
          100: "var(--color-card-100)",
          200: "var(--color-card-200)",
          300: "var(--color-card-300)",
          400: "var(--color-card-400)",
          500: "var(--color-card-500)",
          600: "var(--color-card-600)",
          700: "var(--color-card-700)",
          800: "var(--color-card-800)",
          900: "var(--color-card-900)",
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
