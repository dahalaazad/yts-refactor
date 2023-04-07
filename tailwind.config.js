/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#12507A",
        darkPrimaryColor: "#042d47",
        secondaryColor: "#3e3e3e",
        lightColor: "#ffffff",
        successColor: "#4caf50",
        dangerColor: "#f44336",
        infoColor: "#2196f3",
        warningColor: "#ff9800",
        ytsDarkColor: "#1d1d1d",
        ytsGreenColor: "#75c74e",
        ytsFooterDark: "#171717",
        ytsFootergrey: "#777575",
        ytsactivegreen: "#6ac045",
        pageButtonGreenColor: "#52a52f",
        paginationGreenColor: "#5DA93C",
        textColor: "#2e2e2e",
        torrentbgColor: "rgba(27,27,35,.4)",
        searchBorderColor: "#2f2f2f",
        torrentHoverColor: "#d5d5d5",
        langTextColor: "#ACD7DE",
      },
    },
  },
  plugins: [],
};
