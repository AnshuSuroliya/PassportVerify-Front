/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage:{
        "img1":"url('https://wise.com/imaginary/f905e44b2f3d06bd540428f5d202a849.jpg?width=1200')",
        "img2":"url('https://wise.com/imaginary/f905e44b2f3d06bd540428f5d202a849.jpg')",
        "img3":"url('https://www.passportindia.gov.in/AppOnlineProject/images/5years/slide5.JPG')",
        "img4":"url('https://portal1.passportindia.gov.in/AppOnlineProject/images/5years/slide4.JPG')",
      }
    },
  },
  plugins: [],
}

