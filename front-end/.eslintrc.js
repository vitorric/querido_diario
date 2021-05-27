module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-console': 'off',
    'indent': [2, 2],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 10,
      "multiline": {
        "max": 5,
        "allowFirstLine": true
      }
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}