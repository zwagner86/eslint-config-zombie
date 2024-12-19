import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import nodePlugin from 'eslint-plugin-node';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

// Import rule configurations
import babel from './rules/babel.js';
import bestPractices from './rules/best-practices.js';
import es6 from './rules/es6.js';
import node from './rules/node.js';
import possibleErrors from './rules/possible-errors.js';
import reactHooks from './rules/react-hooks.js';
import react from './rules/react.js';
import stylisticIssues from './rules/stylistic-issues.js';
import variables from './rules/variables.js';
import tests from './overrides/tests.js';

export default [
    {
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
    },
    // Test overrides configuration
    {
        files: ['**/*.spec.js', '**/*.test.js'],
        rules: tests.overrides[0].rules,
    },
];
