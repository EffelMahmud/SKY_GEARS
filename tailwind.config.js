/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    fontFamily: {
      fontRegular: ["exo-regular"],
      fontBold: ["exo-bold"],
      fontInter: ["inter-regular"],
    },
  },
  plugins: [],
};
