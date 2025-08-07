/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#020817",
        primary: "#126d34",
        plight: "#1a9948",
        accent: "#1a9948",
        muted:"#f3f4f64d",
      },
    },
  },
  plugins: [],
};
