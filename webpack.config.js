const path = require('path');
const webpack = require('webpack');
const bundleOutputDir = './build';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        target: 'web',
        stats: { modules: false },
        entry: { 'main': './index.ts' },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.sass', '.scss']
        },
        output: {
            filename: 'nval-tippy.min.js',
            path: path.join(__dirname, 'dist', 'browser'),
            library: 'NValTippy',
            libraryTarget: "umd",
            globalObject: "typeof self !== 'undefined' ? self : this"
        },
        module: {

            rules: [
                {
                    test: /\.tsx?$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'ts-loader']
                }
            ]
        },
        externals: {
            "tippy.js": "tippy.js",
            "nval": "NVal"
        },
        plugins: [
            new webpack.ProvidePlugin({
                nval: 'NVal'
            }),

        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin()
            ])
    }];
};
