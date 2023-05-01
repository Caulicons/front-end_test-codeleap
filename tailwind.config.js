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
      extend: {
         maxWidth: {
            800: '800px'
         },
         padding: {
            default: '24px'
         },
         margin: {
            default: '24px'
         },
         screens: {
            md: '800px',
            pocket: '150px'
         },
         colors: {
            black: '#000000',
            white: '#FFFFFF',
            gray: '#777777',
            grayHover: '#f1f5f9',
            blue: '#7695EC',
            blueHover: '#1e40af',
            red: '#FF5151',
            redHover: '#be123c',
            green: '#47B960',
            greenHover: '#15803d',
            placeholder: '#CCCCCC',
            transparent: 'transparent',
            borderColor: '#999999',
            backgroundColor: '#DDDDDD'
         },
      },
   },
   plugins: [],
};

