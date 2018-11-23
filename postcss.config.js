module.exports = ({ env }) => ({
    map: true,
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-css-variables": { preserve: false },
        autoprefixer: {},
        cssnano: env === "production" ? {} : false,
    },
});
