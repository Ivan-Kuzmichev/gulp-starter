global.options = {
    webpack: {
        output: {
            publicPath: '/scripts/'
        },
        watch: true,
        devtool: 'cheap-module-inline-source-map',
        module: {
            loaders: [{
                test: /\.js$/,
                include: './app/',
                loader: 'babel?presets[]=es2015'
            }]
        },
        plugins: [
            new webpack.NoErrorsPlugin()
        ]
    }
}