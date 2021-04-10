module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",

    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",

    // "plugin:react-hooks/recommended",
    "prettier"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/display-name": 1,

    "semi": ["error", "never"],
    "indent": ["error", 2],
    "no-prototype-builtins": 0,
    "quotes": [ "error", "double" ],
    "no-unused-vars": "off",

    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "@typescript-eslint/no-empty-function": "off",


    /* TODO: enable rules */
    "react/jsx-props-no-spreading": "off",
    "import/extensions": "off",
    "arrow-body-style": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off"
  }
}
