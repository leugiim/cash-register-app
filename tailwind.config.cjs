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
                primary: '#001C8B',
                secondary: '#406DF5',
                muted: '#FFFFFF',
                light: '#0097C1',
                alternative: '#A8001D',
                dark: '#464555'
            }
        }
    },
};

module.exports = config;