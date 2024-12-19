# eslint-config-zombie

This module provides your project with an extendable base ESLint configuration to develop applications.

## Installation

```bash
npm install --save-dev eslint-config-zombie
```

## Usage with ESLint v9

Starting with ESLint v9, you'll need to use the new flat config format. Create an `eslint.config.js` file in your project's root:

```javascript
const baseConfig = require('eslint-config-zombie');
const testConfig = require('eslint-config-zombie/test-file-config');

module.exports = [
    baseConfig,                // Base configuration for all JavaScript files
    testConfig,                // Relaxed rules for test files (*.spec.js, *.test.js)
    // Add your own custom configurations here if needed
];
```

### Configuration Details

The package provides two configurations:

1. Main configuration (from `eslint-config-zombie`):
   - Parser: `@babel/eslint-parser`
   - React and React Hooks support
   - Node.js environment settings
   - Best practices, ES6, and stylistic rules

2. Test configuration (from `eslint-config-zombie/test-file-config`):
   - Applies to `*.spec.js` and `*.test.js` files
   - Disables certain rules that are commonly problematic in test files
   - Works independently of the base configuration

### Customizing the Configuration

You can extend or override the configurations:

```javascript
const baseConfig = require('eslint-config-zombie');
const testConfig = require('eslint-config-zombie/test-file-config');

module.exports = [
    baseConfig,
    testConfig,
    {
        // Your custom rules here
        rules: {
            // Override or add rules
            'no-console': 'warn',
        },
    },
];
```

## Requirements

- Node.js >=18.18.0
- ESLint >=9.17.0
- You should have a Browserslist config specified in your project (recommended using `.browserslistrc` file)

## License

MIT
