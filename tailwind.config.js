/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        taberna: ["Taberna", "sans-serif"],
        gilroy: ["Gilroy-Med", "sans-serif"],
        gilroyBold: ["Gilroy-Bold", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        mnImg: "url('https://i.imgur.com/c89MDBb.jpeg')",
      },
    },
  },
  plugins: [],
};
