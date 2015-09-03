'use strict';
module.exports = {
    plugins: [
        'react',
    ],

    ecmaFeatures: {
        jsx: true,
    },

    rules: {
        // Prevent missing displayName in a React component definition
        'react/display-name': [
            2,
            {
                // Accept names from ES6 Classes or proper exports
                acceptTranspilerName: true,
            },
        ],
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': 2,
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': [
            2,
            {
                // ensure closing bracket aligns to the opening tag
                location: 'tag-aligned',
            },
        ],
        // Enforce or disallow spaces inside of curly braces in JSX attributes.
        'react/jsx-curly-spacing': [
            2,
            // Spaces are not allowed ever
            'never',
        ],
        // Validate props indentation in JSX
        'react/jsx-indent-props': [
            2,
            // indent by 2 spaces
            2,
        ],
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': [
            2,
            {
                maximum: 3,
            },
        ],
        // Prevent duplicate properties in JSX
        'react/jsx-no-duplicate-props': 2,
        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 0,
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,
        // Enforce quote style for JSX attributes
        'react/jsx-quotes': [2, 'double'],
        // Enforce propTypes declarations alphabetical sorting
        'react/jsx-sort-prop-types': 0,
        // Enforce props alphabetical sorting
        'react/jsx-sort-props': 0,
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // Prevent usage of dangerous JSX properties
        'react/no-danger': 2,
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': [2, 'allow-in-func'],
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 2,
        // Prevent multiple component definition per file
        'react/no-multi-comp': 2,
        // Prevent usage of setState
        'react/no-set-state': 0,
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 2,
        // Prevent missing props validation in a React component definition
        'react/prop-types': 2,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,
        // Restrict file extensions that may be required
        'react/require-extension': 0,
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 2,
        // Enforce component methods order
        'react/sort-comp': 2,
        // Prevent missing parentheses around multiline JSX
        'react/wrap-multilines': 2,
    },
};
