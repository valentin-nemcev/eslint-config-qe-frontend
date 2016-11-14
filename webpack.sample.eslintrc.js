module.exports = {
    extends: 'qe-frontend',
    // npm install -DE babel-eslint
    parser: 'babel-eslint',
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
