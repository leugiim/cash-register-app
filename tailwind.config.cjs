const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif']
            },
            colors: {
                primary: '#406DF5',
                secondary: '#001C8B',
                muted: '#AAA9BC',
                light: '#0097C1',
                alternative: '#A8001D',
                dark: '#464555'
            }
        }
    },
};

module.exports = config;