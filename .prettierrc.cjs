module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,

  "importOrder": [
    "^@modules/(.*)$",
    "^types/(.*)$",
    "^@services/(.*)$",
    "^@theme/(.*)$",
    "^@src/(.*)$",
    "^@hooks/(.*)$",
    "^@components/(.*)$",
    "^@assets/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}
