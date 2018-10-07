module.exports = ({ env }) => ({
    map: true,
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-custom-properties": { preserve: false },
        autoprefixer: {},
        cssnano: env === "production" ? {} : false,
    },
});
