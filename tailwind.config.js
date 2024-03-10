/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: "#F9FAFB",
        },
        amber: {
          500: "#FFA500",
        },

        slate: {
          300: "#708090",
        },
      },
      fontSize: {
        base: "0.9375rem",
        sm: "0.75rem",
      },
      width: {
        sidebar: "14.375rem",
        "sidebar-mini": "3.75rem",
      },
    },
  },
  plugins: [],
};
