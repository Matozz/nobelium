module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "next", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "comma-dangle": "off",
    semi: "off",
    quotes: "off",
    "multiline-ternary": "off",
    "space-before-function-paren": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/display-name": "off",
  },
  globals: {
    React: true,
  },
};
