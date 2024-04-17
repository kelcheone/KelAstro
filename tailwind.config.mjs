/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 50%": {
            transform: "translateY(0%)",
            "animation-timing-function": "ease-in",
          },
          "25%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "ease-out",
          },
        },
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(to right, #f97316, #e11d48)",
      },
      fontFamily: {
        mono: [
          "'Fira Code'",
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      "emerald",
      {
        dark: {
          primary: "#9484e7",
          secondary: "#8d1c61",
          accent: "#d83b6d",
          neutral: "#150c41",
          "base-100": "#070416",
        },
      },
      {
        light: {
          primary: "#29187b",
          secondary: "#e372b8",
          accent: "#c42758",
          neutral: "#150c41",
          "base-100": "#ece9fb",
        },
      },
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "synthwave",
      "retro",
      "night",
      "dim",
      "emerald",
    ],

    darkTheme: "dim",
  },
  darkMode: ["class", '[data-theme="dim"]'],
};
