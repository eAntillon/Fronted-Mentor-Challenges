import { extendTheme } from '@chakra-ui/react';

const themes = {
    colors: {
        cyan: {
            100: 'hsl(189, 41%, 97%)',
            200: 'hsl(185, 41%, 84%)',
            250: '#9fe8df',
            300: 'hsl(184, 14%, 56%)',
            350: '#0d686d',
            400: 'hsl(186, 14%, 43%)',
            500: 'hsl(172, 67%, 45%)',
            800: 'hsl(183, 100%, 15%)',
        },
    },
    fonts: {
        mono: "'Space Mono', monospace",
    },
};
const theme = extendTheme(themes);

export default theme;
