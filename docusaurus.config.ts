import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const config: Config = {
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
        type: "image/svg+xml",
        href: "/favicons/favicon.svg",
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
        sizes: "48x48",
        href: "/favicons/favicon-48x48.png",
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
  // For GitHub Pages, this value must be defined.
  trailingSlash: true,

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
      {
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "opentofu-repo/website/docs",
          routeBasePath: "/docs",
          editUrl: ({ docPath }) => {
            // Remove the edit link from the documentation index page
            // TODO: remove after moving the page to the main OpenTofu repo
            if (docPath === "index.mdx") {
              return `https://github.com/opentofu/opentofu.org/edit/main/docs/${docPath}`;
            }

            return `https://github.com/opentofu/opentofu/edit/main/website/docs/${docPath}`;
          },
        },
        blog: false,
        gtag: {
          trackingID: "G-NKLFR0FNQZ",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    "./plugins/blog-plugin",
    function tailwindPlugin() {
      return {
        name: "tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/blog/opentofu-announces-fork-of-terraform",
            from: "/announcement",
          },
          {
            to: "/blog/the-opentofu-fork-is-now-available",
            from: "/fork",
          },
          {
            from: "/docs/cli/install/apt",
            to: "/docs/intro/install/deb",
          },
          {
            from: "/docs/cli/install/yum",
            to: "/docs/intro/install/rpm",
          },
          // TODO: This will be possible after upgrading to Docusaurus 3
          // {
          //   to: "https://join.slack.com/t/opentofucommunity/shared_invite/zt-24ma55j2u-a2DlPHCoMqlJkCEHL5DX_w",
          //   from: "/slack",
          // },
        ],
      },
    ],
    function () {
      return {
        name: "follow-symlinks",
        configureWebpack() {
          return {
            resolve: {
              // Yes, leave this on false to support symlinks.
              symlinks: false,
            },
          };
        },
      };
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: "opentofu-ga",
      content:
        '<a target="_blank" rel="noopener noreferrer" href="/blog/help-us-test-opentofu-1-7-0-alpha1/">OpenTofu 1.7.0-alpha1 is here</a> – try out upcoming features such as <strong>state encryption</strong>, the <strong>removed block</strong>, and much more.',
      backgroundColor: "#ffda18",
      textColor: "#1b1d20",
      isCloseable: false,
    },
    algolia: {
      appId: "0AUNALFPJF",
      apiKey: "5a83e1af5126db1360bdc84bfefb20b8",
      indexName: "opentofu",
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
        {
          label: "Privacy",
          href: "/privacy",
        },
      ],
    },
    navbar: {
      hideOnScroll: true,
      items: [
        {
          to: "/getting-started",
          label: "Getting started",
          position: "left",
        },
        {
          to: "/download",
          label: "Download",
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
          label: "Roadmap",
          href: "https://github.com/opentofu/opentofu/milestones",
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
        //       href: "https://github.com/orgs/opentofu/discussions",
        //     },
        //   ],
        // },
        {
          type: "custom-github-stars-navbar-item",
          position: "right",
          ghRepoUrl: "https://github.com/opentofu/opentofu",
          buttonLabel: "Star",
        },
        {
          type: "custom-social-icon-link-navbar-item",
          href: "https://www.youtube.com/channel/UCgIzfj9QuWL9HHXIXq2A0Ig",
          position: "right",
          name: "youtube",
          label: "Go to the OpenTofu's Youtube page",
        },
        {
          type: "custom-social-icon-link-navbar-item",
          href: "https://x.com/opentofuorg",
          position: "right",
          name: "x",
          label: "Follow us on X",
        },
        {
          type: "custom-social-icon-link-navbar-item",
          href: "/slack",
          position: "right",
          name: "slack",
          label: "Join us on Slack",
        },
      ],
    },
    prism: {
      theme: prismThemes.dracula,
      additionalLanguages: ["hcl", "powershell"],
    },
    image: "/img/og.png",
  } satisfies Preset.ThemeConfig,
};

export default config;
