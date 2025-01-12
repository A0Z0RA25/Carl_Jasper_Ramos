/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#FEF9E1',
        'banner': '#A31D1D',
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
