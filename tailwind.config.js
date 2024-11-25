/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Tetap tambahkan untuk kemudahan eksplisit.
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"], // Override default sans menjadi Poppins.
    },
  },
  plugins: [],
};
