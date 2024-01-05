/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "img1":"linear-gradient(to right bottom, rgb(61,63,60),rgb(219,224,215)),url('https://wise.com/imaginary/f905e44b2f3d06bd540428f5d202a849.jpg?width=1200')",
      }
    },
  },
  plugins: [],
}

