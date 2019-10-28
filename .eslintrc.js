module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
      vue: true,
    },
  },
  env: {
    node: true,
  },
  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': ['off', { code: 200 }, { ignoreTemplateLiterals: true }, { ignoreStrings: true }],
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': [
      0,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
        json: 'never',
      },
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/name-property-casing': 'off',
    'vue/html-end-tags': 'error',
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double',
    ],
    'vue/order-in-components': 'error',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
