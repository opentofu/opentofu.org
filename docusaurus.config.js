// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenTF Documentation",
  favicon: "/img/favicon32.png",
  url: "https://docs.opentf.org",

  baseUrl: "/",

  // TODO: Provide final values
  organizationName: "opentf",
  projectName: "docs",

  // TODO: Once we clean up links we can switch to "throw"
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: Do we want to support light mode?
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "OpenTF",
        logo: {
          alt: "OpenTF",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/intro",
            label: "Introduction",
            position: "left",
          },
          {
            to: "/cli",
            label: "CLI",
            position: "left",
          },
          {
            to: "/internals",
            label: "Internals",
            position: "left",
          },
          {
            to: "/language",
            label: "Language",
            position: "left",
          },
          {
            // TODO: Make sure this is final
            href: "https://github.com/opentffoundation/opentf",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["hcl"],
      },
    }),
};

module.exports = config;
