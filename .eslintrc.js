module.exports = {
    extends: './index.js',
    env: {
        node: true,
    },
    settings: {
        // npm install -DE eslint-import-resolver-node
        'import/resolver': 'node',
    },
    rules: {
        'import/no-commonjs': 'off',
    }
}
