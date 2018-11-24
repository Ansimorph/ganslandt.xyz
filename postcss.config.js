module.exports = () => ({
    map: true,
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-css-variables": { preserve: false },
        autoprefixer: {},
    },
});
