module.exports = () => ({
    map: true,
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-custom-units": {},
        "postcss-css-variables": { preserve: false },
        "postcss-calc": {},
        autoprefixer: {},
    },
});
