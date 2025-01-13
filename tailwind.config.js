/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        back: '#526D82',
        banner : '#27374D',
        contentCol : "#ffffff",
        text: '#DDE6ED',
        add: '#9DB2BF'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        itim: ['Itim', 'cursive'],
      },
      
    },
  },
  plugins: [],
}
