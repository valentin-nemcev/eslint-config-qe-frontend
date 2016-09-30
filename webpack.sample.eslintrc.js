module.exports = {
    extends: 'qe-frontend',
    settings: {
        // npm install -DE eslint-import-resolver-webpack
        'import/resolver': 'webpack',
        // 'import/resolver': {
        //     webpack: {
        //         config: 'build/webpack.config.babel.js',
        //     },
        // },
    }
}
