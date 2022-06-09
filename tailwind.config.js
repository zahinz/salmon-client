module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["96px", "144px"],
        h2: ["60px", "90px"],
        h3: ["46px", "69px"],
        h4: ["34px", "52px"],
        h5: ["24px", "36px"],
        h6: ["20px", "30px"],
        body1: ["16px", "24px"],
        body2: ["14px", "21px"],
        caption: ["12px", "18px"],
      },
    },
  },
  plugins: [],
};
