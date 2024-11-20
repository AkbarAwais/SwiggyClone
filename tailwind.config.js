/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "cursive": ['Cedarville Cursive', 'cursive']
        },
        extend: {
            boxShadow: {
                'bankai': 'rgba(0, 0, 0, 0.04) 0px 8px 16px 0px',
            },
            colors: {
                'bankai-black': 'rgba(2, 6, 12, 0.15)',
            },
        },
    },
    plugins: [],
}
