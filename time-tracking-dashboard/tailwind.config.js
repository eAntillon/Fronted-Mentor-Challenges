module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: 'hsl(246, 80%, 60%)',
        softBLue: 'hsl(195, 74%, 62%)',
        lightRed1: 'hsl(15, 100%, 70%)',
        lightRed2: 'hsl(348, 100%, 68%)',
        limeGreen: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        softOrange: 'hsl(43, 84%, 65%)',
        darkBlue1: 'hsl(226, 43%, 10%)',
        darkBlue2: 'hsl(235, 46%, 20%)',
        desaturatedBLue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        'rubik': '"Rubik", sans-serif'
      },
      boxShadow: ''
    },
  },
  plugins: [],
}
