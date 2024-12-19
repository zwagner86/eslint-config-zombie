const babelParser = require('@babel/eslint-parser');
const babelPlugin = require('@babel/eslint-plugin');
const nodePlugin = require('eslint-plugin-node');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const babel = require('./rules/babel');
const bestPractices = require('./rules/best-practices');
const es6 = require('./rules/es6');
const node = require('./rules/node');
const possibleErrors = require('./rules/possible-errors');
const reactHooks = require('./rules/react-hooks');
const react = require('./rules/react');
const stylisticIssues = require('./rules/stylistic-issues');
const variables = require('./rules/variables');
const tests = require('./overrides/tests');

module.exports = {
    // Global configuration
    languageOptions: {
        parser: babelParser,
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },
        globals: {
            // Environments
            browser: true,
            node: true,
            es6: true,
            jasmine: true,
            jest: true,
            mocha: true,
        },
    },
    plugins: {
        '@babel': babelPlugin,
        node: nodePlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
    },
    // Merge all rule configurations
    rules: {
        ...babel.rules,
        ...bestPractices.rules,
        ...es6.rules,
        ...node.rules,
        ...possibleErrors.rules,
        ...reactHooks.rules,
        ...react.rules,
        ...stylisticIssues.rules,
        ...variables.rules,
    },
    settings: {
        ...react.settings,
        ...node.settings,
    },
    // Include test overrides
    overrides: [
        {
            files: ['**/*.spec.js', '**/*.test.js'],
            rules: tests.overrides[0].rules,
        },
    ],
};
