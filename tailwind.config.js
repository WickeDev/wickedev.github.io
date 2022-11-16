const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/layouts/**/*.{js,jsx,ts,tsx}',
        './src/templates/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    variants: {
        extend: {},
    },
    plugins: [
        'gatsby-plugin-postcss',
        require('flowbite/plugin'),
        require('flowbite-typography'),
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            bg_h: 'var(--bg_h)',
            bg: 'var(--bg)',
            bg_s: 'var(--bg_s)',
            bg1: 'var(--bg1)',
            bg2: 'var(--bg2)',
            bg3: 'var(--bg3)',
            bg4: 'var(--bg4)',

            fg: 'var(--fg)',
            fg1: 'var(--fg1)',
            fg2: 'var(--fg2)',
            fg3: 'var(--fg3)',
            fg4: 'var(--fg4)',

            red: 'var(--red)',
            green: 'var(--green)',
            yellow: 'var(--yellow)',
            blue: 'var(--blue)',
            purple: 'var(--purple)',
            aqua: 'var(--aqua)',
            orange: 'var(--orange)',
            gray: 'var(--gray)',

            redDim: 'var(--red-dim)',
            greenDim: 'var(--green-dim)',
            yellowDim: 'var(--yellow-dim)',
            blueDim: 'var(--blue-dim)',
            purpleDim: 'var(--purple-dim)',
            aquaDim: 'var(--aqua-dim)',
            orangeDim: 'var(--orange-dim)',
            grayDim: 'var(--gray-dim)',
        }
    }
}