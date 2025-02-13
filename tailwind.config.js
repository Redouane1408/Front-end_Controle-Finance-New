/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: { 
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          title1: "var(--title1)",
          title2: "var(--title2)",
          title3: "var(--title3)",
          paragraphe: "var(--paragraphe)",
          validation: "var(--validation)",
          error: "var(--error)",
          warning: "var(--warning)",
          buttonNeutral: "var(--ButtonNeutral)",
          buttonHover: "var(--ButtonHover)",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  