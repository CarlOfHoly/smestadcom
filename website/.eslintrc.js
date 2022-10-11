module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks", "@typescript-eslint", "react", "jsx-a11y"],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
}
