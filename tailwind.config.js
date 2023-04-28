/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      colors: {
         black: '#000000',
         white: '#FFFFFF',
         gray: '#777777',
         blue: '#7695EC',
         red: '#FF5151',
         green: '#47B960',
         placeholder: '#CCCCCC',
         transparent: 'transparent',
         borderColor: '#999999',
         backgroundColor: '#DDDDDD'
      },
      borderRadius: {
         small: '8px',
         default: '16px'
      },
      fontSize: {
         titleFontSize: '22px',
         subTitleFontSize: '16px',
         fontSize: '18px',
         placeholderFontSize: '14px',
      },
      fontFamily: {
         Roboto: ['Roboto', 'sans-serif']
      },
      padding: {
         default: '24px'
      },
      extend: {
         maxWidth: {
            800: '800px'
         }
      },
   },
   plugins: [],
};

