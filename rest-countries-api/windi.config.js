import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    extract: {
        include: ['src/**/*.{js,jsx}'],
        exclude: ['node_modules', '.git'],
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                DarkBlue: 'hsl(209, 23%, 22%)',
                VeryDarkBlueLight: 'hsl(200, 15%, 8%)',
                VeryDarkBlueDark: 'hsl(207, 26%, 17%)',
                DarkGray: 'hsl(0, 0%, 52%)',
                VeryLightGray: 'hsl(0, 0%, 98%)',
                white: 'hsl(0, 0%, 100%)',
            },
            fontFamily: {
                nunito: ['Nunito Sans', 'sans-serif'],
            },
            dropShadow: {
                '3xl': '0px 5px 10px 0px rgba(0, 0, 0, 0.75)',
            },
        },
    },
});
