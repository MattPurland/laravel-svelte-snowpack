/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        "resources/js": { url: '/dist' },
        "resources/sass": { url: '/dist' }
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-sass',
            {
                compilerOptions: {
                    'load-path': 'node_modules'
                }
            }
        ]
    ],
    routes: [
        /* Example: Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        rollup: {
            plugins: [
                require("rollup-plugin-svelte")({
                    include: ["node_modules"],
                }),
                require("rollup-plugin-postcss")({
                    use: [
                        [
                            "sass",
                            {
                                includePaths: [
                                    "resources/sass/theme",
                                    "resources/sass",
                                    "node_modules"
                                ],
                            },
                        ],
                    ],
                }),
            ],
        },
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
        out: 'public',
        clean: true,
        minify: false
    }
};
