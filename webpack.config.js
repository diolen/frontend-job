var path = require('path');

module.exports = {
    devtool: 'eval',
    devServer: {
        port: 3000,
        colors: true,
        contentBase: 'public',
        historyApiFallback: true
    },
    entry: './app',
    eslint: {
        configFile: '.eslintrc'
    },
    resolve: {
        modulesDirectories: ['node_modules', '.']
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel?presets[]=es2015&presets[]=react!eslint',
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
    ]}
};
