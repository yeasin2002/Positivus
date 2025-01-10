/** @type {import('prettier').Config} */

export default {
  semi: true,
  trailingComma: "es5",
  endOfLine: "lf",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  importOrder: ["^(react/(.*)$)|^(react$)", "^@?\\w", "", "^@/", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
};
