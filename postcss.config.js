module.exports = () => ({
    map: true,
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-custom-units": {},
        "postcss-round-float": {},
        "postcss-css-variables": { preserve: false },
        "postcss-calc": {},
        autoprefixer: {},
    },
});
