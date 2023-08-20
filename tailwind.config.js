/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-600": "#7f56d9",
        "gray-200": "#eaecf0",
        "gray-100": "#f2f4f7",
        "gray-700": "#344054",
        "success-50": "#ecfdf3",
        "success-700": "#027a48",
        white: "#fff",
        "foundation-purple-light-hover": "#efe5f8",
        "foundation-purple-normal": "#914fd2",
        lightslategray: "#a08fb1",
        "foundation-purple-dark-active": "#41245e",
        gainsboro: "#e7e5e4",
        "foundation-purple-white-hover": "#faf6fd",
        "foundation-purple-normal-hover": "#8347bd",
        limegreen: "#16cc3e",
      },
      fontFamily: {
        "text-xs-medium": "Inter",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "29xl": "48px",
      },
      boxShadow: {
        custom: "0px 0px 0px 4px rgba(248.46, 241.19, 255, 0.58)",
      },
    },
    fontSize: {
      xs: "0.75rem",
      smi: "0.81rem",
      lg: "1.13rem",
    },
  },
  plugins: [],
};
