/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                txtclr: '#8ca5c3',
                bgclr: '#110f2c',
                sectionclr: '#30465c',
                ashen: '#EAECEC',
                cardwhite: '#FEFFFE',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
});
