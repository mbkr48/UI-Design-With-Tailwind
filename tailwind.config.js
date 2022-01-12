module.exports = {
    content: ["./public/**/*.{html,js}"],

    theme: {
        extend: {
            backgroundImage: {
                'header-bg': "url('images/header-bg.png')",
                'header-img': "url('images/header-img.png')",
                'world-map-bg': "url('images/world-map-bg.png')",
                'story-bg': "url('images/story-bg.png')",
            },

            height: {
                sm: '420px',
                md: '560px',
            },

            minHeight: {
                sm: '420px',
                md: '560px',
            },

            transitionProperty: {
                'bg-img': 'background-image',
                'bg': 'background',
            },

            fontFamily: {
                'montserrat': ['Montserrat', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],
                'palatino-linotype': ['Palatino Linotype', 'Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],
                'roboto': ['Roboto', 'Helvetica', 'Monospace', 'sans-serif', 'serif'],
            },
        },

        screens: {
            '2xl': { 'max': '1535px' },

            'xl': { 'max': '1279px' },

            'lg': { 'max': '1023px' },

            'md': { 'max': '767px' },

            'sm': { 'max': '639px' },

            'min-2xl': { 'min': '1536px' },

            'min-xl': { 'min': '1280px' },

            'min-lg': { 'min': '1024px' },

            'min-md': { 'min': '768px' },

            'min-sm': { 'min': '640px' },
        }
    },

    plugins: [],
}