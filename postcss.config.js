module.exports = () => ({
    map: true,
    plugins: {
        "postcss-import": {},
        "postcss-mixins": {},
        "postcss-nested": {},
        "postcss-custom-units": {},
        "postcss-css-variables": { preserve: false },
        "postcss-color-function": {},
        "postcss-calc": {},
        "postcss-hexrgba": {},
        autoprefixer: {},
    },
});
