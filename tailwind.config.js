/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            // https://uicolors.app/edit?sv1=malibu:50-ecfdff/100-cff8fe/200-a4effd/300-66e2fa/400-21cbef/500-05add5/600-078ab3/700-0d6f91/800-145a76/900-154a64;flush-orange:50-fffaec/100-fff4d3/200-ffe5a5/300-ffd06d/400-ffb032/500-ff960a/600-ff7f02/700-cc5c02/800-a1470b/900-823c0c
            'malibu': {
                50: '#ecfdff',
                100: '#cff8fe',
                200: '#a4effd',
                300: '#66e2fa',
                400: '#21cbef',
                500: '#05add5',
                600: '#078ab3',
                700: '#0d6f91',
                800: '#145a76',
                900: '#154a64',
            },
            'tulip-tree': {
                50: '#fcf9ea',
                100: '#f9f1c8',
                200: '#f3e295',
                300: '#eccb58',
                400: '#e4b124', // main
                500: '#d59c1d',
                600: '#b87a16',
                700: '#935715',
                800: '#7a4619',
                900: '#683a1b',
                950: '#3c1e0c',
            }
        }
    },
  },
  plugins: [],
}

