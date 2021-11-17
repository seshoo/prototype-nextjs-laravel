module.exports = {
    reactStrictMode: true,
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };

        return config;
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    // swcMinify: true,
    images: {
        formats: [/* 'image/avif',  */ 'image/webp'],
    },
};
