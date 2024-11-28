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
        'green': '#77be1d'
      },
      borderColor: {
        'border-after-header': 'rgba(255, 255, 255, 0.1)'
      },
      backgroundImage: {
        'need-for-speed': 'url("/src/assets/images/need-for-speed.png")',
        'need-for-speed-payback': 'url(/src/assets/images/slider_img2.jpg)',
        'need-for-speed-2015': 'url(/src/assets/images/slider_img.avif)',
        'firstCardBackground': 'linear-gradient(159deg, #1dbe53 0%, #ace238 100%);',
        'linear': 'linear-gradient(#06030F, #06030F)'
      },
      screens: {
        'my-laptop': '1537px'
      }
    },
  },
  plugins: [],
}
