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
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
  overrides: [
    {
      files: [
        "docusaurus.config.js",
        "sync-supporters.js",
        "generate-og-images.js",
        "plugins/*.js",
      ],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
