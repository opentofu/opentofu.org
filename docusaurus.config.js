// @ts-check

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpenTofu",
  url: "https://opentofu.org",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicons/android-chrome-192x192.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/favicons/android-chrome-512x512.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/favicons/site.webmanifest",
      },
    },
  ],

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
        blog: false,
        gtag: {
          trackingID: "G-NKLFR0FNQZ",
        },
      }),
    ],
  ],

  plugins: [
    "./plugins/blog-plugin",
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
          {
            to: "/blog/the-opentf-fork-is-now-available",
            from: "/fork",
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
            href: "/supporters",
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
        hideOnScroll: true,
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
            href: "https://twitter.com/opentofuorg",
            position: "right",
            name: "twitter",
            label: "Follow us on Twitter",
          },
          {
            type: "custom-social-icon-link-navbar-item",
            href: "https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA",
            position: "right",
            name: "slack",
            label: "Join us on Slack",
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ["hcl"],
      },
      image: "/img/og.png",
    }),
  customFields: {
    logos: {
      Gruntwork: {
        dark: "/logos/gruntwork.png",
        light: "/logos/gruntwork-light.svg",
      },
      Spacelift: {
        dark: "/logos/spacelift.svg",
        light: "/logos/spacelift-light.svg",
      },
      env0: { dark: "/logos/env0.svg", light: "/logos/env0-light.svg" },
      Scalr: { dark: "/logos/scalr.svg", light: "/logos/scalr-light.png" },
      Harness: {
        dark: "/logos/harness.svg",
        light: "/logos/harness-light.png",
      },
    },
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
  ],
};

module.exports = config;
