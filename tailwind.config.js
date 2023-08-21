/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './services.html', './about.html', './experts.html', './branch.html', './ocs.html', './links.html', './layout-design.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['siemensSans'],
      }
    },
    colors: {
      'blue': '#000028',
      'blue1': '#00193c',
      'blue2': '#002949',
      'white' : '#ffffff',
      'textwhite' : '#fff',
      'cyan' : '#00ffb9',
      'cyan1' : '#00cccc',
      'gray' :'#B2BEB5',
      
    }
  },
  plugins: [
    // ...
    // require('@tailwindcss/aspect-ratio'),
  ],
}

