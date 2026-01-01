/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#7CB342', // Banana leaf green
                    DEFAULT: '#2D4F1E', // Earthy green
                    dark: '#1B3012',
                },
                accent: {
                    yellow: '#FFB300', // Turmeric yellow
                    brown: '#5D4037', // Warm brown
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
