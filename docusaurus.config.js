// @ts-check

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const visit = require("unist-util-visit");

/**
 * Rewrite the URL in a Markdown node.
 * Taken from https://github.com/rjanjic/remark-link-rewrite and simplified to our use case.
 * @param options
 * @returns {function(*): Promise<*>}
 */
function RemarkLinkRewrite({ replacer }) {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "link") {
        node.url = replacer(node.url);
      }
      if (node.type === "jsx" || node.type === "html") {
        if (/<a.*>/.test(node.value)) {
          node.value = node.value.replace(
            /href="(.*?)"/g,
            (_, url) => `href="${replacer(url)}"`
          );
        }
      }
    });

    return tree;
  };
}

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
          remarkPlugins: [
            [
              RemarkLinkRewrite,
              {
                replacer: (url) => {
                  if (url.startsWith("/opentf/")) {
                    return url.replace("/opentf/", "/docs/");
                  }
                  return url;
                },
              },
            ],
          ],
        },
        blog: false,
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
            label: "Follow us on Twitter",
          },
          {
            type: "custom-social-icon-link-navbar-item",
            href: "https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA",
            position: "right",
            name: "slack",
            label: "Join us on Slack",
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
        theme: darkCodeTheme,
        additionalLanguages: ["hcl"],
      },
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
