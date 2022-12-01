module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    // ecmaVersion: 12,
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended', // ++
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        trailingComma: 'none', // 末尾逗号
        semi: false, // 分号
        bracketSpacing: true, // 字面量对象括号中的空格
        endOfLine: 'auto',
        bracketSameLine: true,
        proseWrap: 'preserve',
        singleAttributePerLine: false,
        embeddedLanguageFormatting: 'auto',
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: 'css',
        arrowParens: 'avoid'
      }
    ],
    'no-console': 'off',
    'no-debugger': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    '@typescript-eslint/no-explicit-any': ['off'], // 关闭any报错
    'vue/no-multiple-template-root': 0, // 允许多个根节点
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'res', // for Express responses
          'item', // for Express responses
          'state' // for vuex state 解决assignment to property of function parameter ‘state‘
        ]
      }
    ],
    'import/no-unresolved': [
      // 别名路径报错问题
      2,
      {
        ignore: ['^@/'] // @ 是设置的路径别名
      }
    ]
  }
}
