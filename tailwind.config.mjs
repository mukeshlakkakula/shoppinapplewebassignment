/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "headline-elevated": [
          "SF Pro KR",
          "SF Pro Display",
          "SF Pro Icons",
          "Apple Gothic",
          "HY Gulim",
          "MalgunGothic",
          "HY Dotum",
          "Lexi Gulim",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        normal: "0",
      },
      lineHeight: {
        tight: "1.171875",
      },
    },
  },
  plugins: [],
};
