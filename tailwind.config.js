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
        "gray-warm-200": "#E7E5E4",
        "success-50": "#ecfdf3",
        "success-700": "#027a48",
        white: "#fff",
        "dark-p":"#743FA8",
        "light-p":"#FAF5FF" ,
        "light-p-hover":"#FCF9FF" ,
        "purple-light":"#F4EDFB",
        "foundation-purple-light-hover": "#efe5f8",
        "foundation-purple-normal": "#914fd2",
        "foundation-purple-hover": "#946CBB",
        lightslategray: "#a08fb1",
        "foundation-purple-dark": "#6D3B9E", 
        "foundation-purple-darker": "#331C4A",
        "foundation-purple-dark-active": "#41245e",
        gainsboro: "#e7e5e4",
        "foundation-purple-white-hover": "#faf6fd",
        "foundation-purple-normal-hover": "#8347bd",
        limegreen: "#16cc3e",
        'light-gray': 'rgba(255, 255, 255, 0.64)',
        'lighter-p' : '#914fd278'
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
