# 4.0.2 - 2024-12-19 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   Use CommonJS module.exports

# 4.0.1 - 2024-12-19 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   **BREAKING:** Migrated to ESLint v9's flat config format
-   **BREAKING:** Converted all configuration files to use ES modules
-   **BREAKING:** Removed CommonJS module.exports in favor of ES module exports
-   **BREAKING:** Changed main entry point from `index.js` to `eslint.config.js`

# 4.0.0 - 12/18/2024 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   **BREAKING:** Updated to support ESLint v9
-   **BREAKING:** Updated minimum Node.js version to 18.18.0+
-   Updated parser options to use `ecmaVersion: 'latest'` instead of fixed version
-   Removed deprecated `legacyDecorators` option
-   Disabled `react/react-in-jsx-scope` rule for modern React compatibility
-   Updated dependencies:
    -   `@babel/eslint-parser` to ^7.25.9
    -   `@babel/eslint-plugin` to ^7.25.9
    -   `@babel/core` to ^7.26.0
    -   `eslint-plugin-react` to ^7.37.2
    -   `eslint-plugin-react-hooks` to ^5.1.0

# 3.0.0 - 08/16/2023 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   **BREAKING:** Restructure dependencies

# 2.0.0 - 08/16/2023 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   **BREAKING:** Updated to support Node 16.14.0+ and moved dependencies to devDependencies.

# 1.0.0 - 09/02/2021 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   **BREAKING:** Updated to support Node 12.13.0+ and added/overhauled lots of rules.

# 0.1.0 - 12/12/2017 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   Initial release.
