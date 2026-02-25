/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // better control for Next.js apps
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgOverlay: "var(--bg-overlay)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",

        accentPrimary: "var(--accent-primary)",
        accentSecondary: "var(--accent-secondary)",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },

      borderRadius: {
        xl2: "var(--radius-lg)",
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};