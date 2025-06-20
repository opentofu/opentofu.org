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

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

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
          includeCurrentVersion: false,
          lastVersion: "v1.10",
          docVersionRootComponent: "@theme/DocVersionRoot",
          versions: {
            "v1.6": {
              label: "1.6.x",
              path: "v1.6",
            },
            "v1.7": {
              label: "1.7.x",
              path: "v1.7",
              banner: "none",
            },
            "v1.8": {
              label: "1.8.x",
              path: "v1.8",
              banner: "none",
            },
            "v1.9": {
              label: "1.9.x",
              path: "v1.9",
              banner: "none",
            },
            "v1.10": {
              label: "1.10.x",
              path: "",
            },
            main: {
              label: "Development",
              path: "main",
              banner: "unreleased",
              noIndex: true,
            },
          },
          routeBasePath: "/docs",
          editUrl: ({ version, docPath }) => {
            // Remove the edit link from the documentation index page
            // TODO: remove after moving the page to the main OpenTofu repo
            if (docPath === "index.mdx") {
              return `https://github.com/opentofu/opentofu.org/edit/${version}/docs/${docPath}`;
            }

            return `https://github.com/opentofu/opentofu/edit/${version}/website/docs/${docPath}`;
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
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
      versionPersistence: "none",
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: "opentofu-1-10-ga",
      content:
        '<a href="/blog/opentofu-1-10-0/" class="announcement-bar-link"><div class="announcement-bar-content">🎉 OpenTofu 1.10.0 is here! A Well-Seasoned Release <span class="announcement-arrow">→</span></div></a>',
      backgroundColor: "#00000000",
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
          label: "Registry",
          href: "https://search.opentofu.org",
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
              label: "v1.10.x (current)",
              href: "/docs/",
            },
            {
              label: "v1.9.x",
              href: "/docs/v1.9/",
            },
            {
              label: "v1.8.x",
              href: "/docs/v1.8/",
            },
            {
              label: "v1.7.x",
              href: "/docs/v1.7/",
            },
            {
              label: "v1.6.x",
              href: "/docs/v1.6/",
            },
            {
              label: "Development",
              href: "/docs/main/",
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
          href: "https://opentofu.org/slack/",
          position: "right",
          name: "slack",
          label: "Join us on Slack",
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["hcl", "powershell", "bash"],
    },
    image: "/img/og.png",
  } satisfies Preset.ThemeConfig,
};

export default config;
