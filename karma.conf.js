var path = require('path');

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],
        files: [
            'app/test/*_test.js',
            'app/test/**/*_test.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'app/test/*_test.js': ['webpack'],
            'app/test/**/*_test.js': ['webpack']
        },
        singleRun: false,
        colors : true,
        webpack: {
            resolve: {
                modulesDirectories: ['node_modules', '.']
            },
            module: {
                loaders: [{
                    test: /.js$/,
                    loader: 'babel?presets[]=es2015&presets[]=react',
                    include: [
                        path.resolve(__dirname, 'app')
                    ]
                }, {
                    test: /.less$/,
                    loader: 'style!css!less',
                    include: [
                        path.resolve(__dirname, 'app')
                    ]
                }
            ]},
            watch: true
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};
