module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended" 
  ],
  plugins: [
    "react",
    "react-native",
    "prettier"
  ],
  parserOptions: {
    "ecmaFeatures": {
        "jsx": true
    }
  },
  env: {
    "browser": true,
    "react-native/react-native": true
  },
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "endOfLine":"auto",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
      }
    ]
  }
};
