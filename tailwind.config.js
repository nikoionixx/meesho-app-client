const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : 'rgb(244, 51, 151)',
        textPrimary : '#333333',
        textGrey : '#999999',
        lightPink : '#fceaf0',
      },
      fontFamily : {
        'noto' : ['Noto Sans']
      }
    },
  },
  plugins: [],
});