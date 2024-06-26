module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ["error", { "args": "none" }],
    'vue/no-mutating-props': 'off',
    'no-prototype-builtins': 'off',
    'no-extra-boolean-cast': 'off',
    'vue/return-in-computed-property': 'off',
  }
}
