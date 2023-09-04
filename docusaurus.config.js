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
          routeBasePath: "/docs",
        },
      }),
    ],
  ],

  plugins: [
    function tailwindPlugin() {
      return {
        name: "tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/blog/opentf-announces-fork-of-terraform",
            from: "/announcement",
          },
        ],
      },
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
      footer: {
        links: [
          {
            label: "Manifesto",
            href: "/manifesto",
          },
          {
            label: "Supporters",
            href: "#",
          },
          {
            label: "FAQs",
            href: "/faq",
          },
          {
            label: "Blog",
            href: "/blog",
          },
          {
            label: "Docs",
            href: "/docs",
          },
        ],
      },
      navbar: {
        items: [
          {
            to: "/manifesto",
            label: "Manifesto",
            position: "left",
          },
          {
            to: "/supporters",
            label: "Supporters",
            position: "left",
          },
          {
            to: "/faq",
            label: "FAQs",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            type: "dropdown",
            to: "/docs",
            label: "Docs",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Introduction",
                docId: "intro/index",
              },
              {
                type: "doc",
                label: "CLI",
                docId: "cli/index",
              },
              {
                type: "doc",
                label: "Language",
                docId: "language/index",
              },
              {
                type: "doc",
                label: "Internals",
                docId: "internals/index",
              },
            ],
          },
          // TODO: This link is important but there's no design for it yet
          // {
          //   type: "dropdown",
          //   label: "Community",
          //   position: "right",
          //   items: [
          //     {
          //       label: "GitHub Discussions",
          //       href: "https://github.com/orgs/opentffoundation/discussions",
          //     },
          //   ],
          // },
          // TODO: replace href with opentf repo once it's public
          {
            type: "custom-github-stars-navbar-item",
            position: "right",
            ghRepoUrl: "https://github.com/opentffoundation/manifesto",
            buttonLabel: "Star",
          },
          {
            type: "custom-social-icon-link-navbar-item",
            href: "https://twitter.com/opentforg",
            position: "right",
            name: "twitter",
          },
          {
            type: "custom-social-icon-link-navbar-item",
            href: "https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA",
            position: "right",
            name: "slack",
          },
          {
            type: "custom-button-navbar-item",
            label: "Support Us",
            href: "https://github.com/opentffoundation/manifesto",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["hcl"],
      },
    }),
  customFields: {
    companiesWithLogos: [
      {
        name: "Gruntwork",
        logo: "/logos/gruntwork.png",
        pledge: "Development; open-source community efforts",
      },
      {
        name: "Spacelift",
        logo: "/logos/spacelift.svg",
        pledge: "Cover the cost of 5 FTEs for at least 5 years",
      },
      {
        name: "env0",
        logo: "/logos/env0.svg",
        pledge: "Cover the cost of 5 FTEs for at least 5 years",
      },
      {
        name: "Scalr",
        logo: "/logos/scalr.svg",
        pledge: "Cover the cost of 3 FTEs for at least 5 years",
      },
      {
        name: "Harness",
        logo: "/logos/harness.svg",
        pledge: "Cover the cost of 5 FTEs for at least 5 years",
      },
    ],
  },
};

module.exports = config;
