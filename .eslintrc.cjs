module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@data', './src/data'],
          ['@controllers', './src/scripts/controllers'],
          ['@models', './src/scripts/models'],
          ['@views-components', './src/scripts/views/components'],
          ['@views-pages', './src/scripts/views/pages'],
          ['@styles', './src/styles']
        ]
      }
    }
  }
}
