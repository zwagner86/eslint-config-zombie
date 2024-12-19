module.exports = {
    extends: [
        './rules/babel',
        './rules/best-practices',
        './rules/es6',
        './rules/node',
        './rules/possible-errors',
        './rules/react-hooks',
        './rules/react',
        './rules/stylistic-issues',
        './rules/variables',
        './overrides/tests',
    ].map(require.resolve),
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jasmine: true,
        jest: true,
        mocha: true,
    },
};
