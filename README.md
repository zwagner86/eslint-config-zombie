# eslint-config-zombie

This module provides your project with an extendable base ESLint configuration to develop applications.

## Installation

```bash
npm install --save-dev eslint-config-zombie
```

## Usage with ESLint v9

Starting with ESLint v9, you'll need to use the new flat config format. Create an `eslint.config.js` file in your project's root:

```javascript
const { baseConfig, testConfig } = require('eslint-config-zombie');

module.exports = [
    baseConfig,                // Base configuration for all JavaScript files
    testConfig,                // Relaxed rules for test files (*.spec.js, *.test.js)
    // Add your own custom configurations here if needed
];
```

### Configuration Details

The package exports two configurations:

1. `baseConfig`: The main configuration that includes:
   - Parser: `@babel/eslint-parser`
   - React and React Hooks support
   - Node.js environment settings
   - Best practices, ES6, and stylistic rules

2. `testConfig`: A simple configuration for test files that:
   - Applies to `*.spec.js` and `*.test.js` files
   - Disables certain rules that are commonly problematic in test files
   - Works independently of the base configuration

### Customizing the Configuration

You can extend or override the configurations:

```javascript
const { baseConfig, testConfig } = require('eslint-config-zombie');

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
