module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "jsx-a11y", "react-hooks", "@typescript-eslint"],
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  rules: {
    "react/prop-types": "off",
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
  },
  overrides: [
    {
      files: ["docusaurus.config.js", "sync-supporters.js", "plugins/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
