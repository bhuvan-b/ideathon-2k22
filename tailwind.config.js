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
        // eventsbg:
        //   "url('https://previews.123rf.com/images/robertsrob/robertsrob1611/robertsrob161100034/65198250-old-paper-with-film-strip-background.jpg')",
        // eventsbg:
        //   "url('https://previews.123rf.com/images/rogistok/rogistok1808/rogistok180800056/105741796-pedestrian-crossing-in-the-big-city-comic-cartoon-pop-art-retro-vector-illustration-drawing.jpg')",
        eventsbg:
          "url('https://i.ibb.co/gdrr9B8/retro-burst-background-92086-47.webp')",
      },
      screens: {
        sm: "300px",
        "3xl": "1739px",
      },
    },
  },
  plugins: [],
};
