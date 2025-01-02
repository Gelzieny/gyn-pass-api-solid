import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  ignores: ['node_modules', 'dist', 'build'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['@rocketseat/eslint-config'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    camelcase: 'off',
    'no-useless-constructor': 'off',
  },
})
