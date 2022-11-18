module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'airbnb-typescript',
        "plugin:prettier/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react",
        "prettier",
        "@typescript-eslint",
        "import",
        "react-hooks"
    ],
    "rules": {
        "import/no-unresolved": 0,
        "react/jsx-filename-extension": 0,
        "func-names": "off",
        "react/react-in-jsx-scope": 0,
        "react/function-component-definition": 0,
        "default-param-last": 0,
        "import/prefer-default-export": 0,
        "react/jsx-props-no-spreading": 0,
        "no-shadow": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "import/no-extraneous-dependencies": 0,
        "react/no-array-index-key": 0,
        "no-param-reassign": 0,
        "no-useless-catch": 0,
        "react/no-unescaped-entities": 0,
        "react/jsx-pascal-case": 0,
        "no-unsafe-optional-chaining": 0,
        "no-case-declarations": 0,
        "default-case": 0,
        "no-nested-ternary": 0,
        "react/no-unknown-property": 0
    }
}
