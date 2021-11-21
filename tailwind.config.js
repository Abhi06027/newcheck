module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
     primary: '#333333',
     secondary:   {
       100: '#35283C',
       200: '#F8BEE7',
       300:  '#F3F4F6',
     }

    },
   fontFamily: {
     body: ['Nunito', ]
   }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
