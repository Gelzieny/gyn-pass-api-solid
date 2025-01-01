import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  ignores: ['node_modules', 'dist', 'build'], // Substitui o antigo .eslintignore
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@rocketseat/eslint-config', // Certifique-se de que o pacote está instalado
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Adicione ou sobrescreva regras aqui, se necessário
  },
})
