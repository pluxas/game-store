/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ["Manrope", 'sans-serif'],
        secondFamily: ["Roboto", 'sans-serif'],
        thirdFamily: ["Montserrat", 'sans-serif'],
        fourthFamily: ["Inter", 'sans-serif']
      },
      maxWidth: {
        '1200': '1260px'
      },
      width: {
        'input': '648px'
      },
      height: {
        'need-for-speed': '700px'
      },
      textColor: {
        'flesh': '#3c364e;',
        'green': '#77be1d',
        'clear': 'rgba(255, 255, 255, 0.3)'
      },
      backgroundColor: {
        'input': 'rgba(196, 196, 196, 0.05)',
        'clear': 'rgba(255, 255, 255, 0.05)',
        'playNowButton': 'rgba(255, 255, 255, 0.1)',
        'green': '#77be1d',
        'registration': 'rgba(119, 190, 29, 0.1)',
        'raffleGameBg': 'linear-gradient(191deg, #dcad52 0%, #c19c55 100%)'
      },
      borderColor: {
        'border-after-header': 'rgba(255, 255, 255, 0.1)',
        'green': '#77be1d',
      },
      backgroundImage: {
        'need-for-speed': 'url("/src/assets/images/need-for-speed.png")',
        'need-for-speed-payback': 'url(/src/assets/images/slider_img2.jpg)',
        'need-for-speed-2015': 'url(/src/assets/images/slider_img.avif)',
        'cart-bg': 'url(/src/assets/images/cart-bg.png)',
        'freeGameBg': 'url(/src/assets/images/freegamebg.png)',
        'firstCardBackground': 'linear-gradient(159deg, #1dbe53 0%, #ace238 100%);',
        'linear': 'linear-gradient(#06030F, #06030F)',
      },
      screens: {
        'my-laptop': '1537px'
      }
    },
    screens: {
      'smallSize': '361px',
      'normalSize': '421px',
      'tabletSize': '811px',
      'lg': '1025px'
    }
  },
  plugins: [],
}
