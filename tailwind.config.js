/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'primary-dark': '#0A0A0A',
                'main-bg': 'var(--my-main-bg)',
                'keypad-bg': 'var(--my-keypad-bg)',
                'screen-bg': 'var(--my-screen-bg)',
                'key-opt-bg': 'var(--my-key-opt-bg)',
                'key-opt-shadow': 'var(--my-key-opt-shadow)',
                'key-toggle-bg': 'var(--my-key-toggle-bg)',
                'key-toggle-shadow': 'var(--my-key-toggle-shadow)',
                'key-main-bg': 'var(--my-key-main-bg)',
                'key-main-shadow': 'var(--my-key-main-shadow)',
                'text-screen': 'var(--my-text-screen)',
                'text-equal': 'var(--my-text-equal)',
                'text-option': 'var(--my-text-option)',
                'text-keypad': 'var(--my-text-keypad)',
            },
        },
    },
    plugins: []
};
