import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "imdeepmind",
  tagline: "Abhishek Chatterjee's personal website and notes",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://imdeepmind.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "imdeepmind", // Usually your GitHub org/user name.
  projectName: "imdeepmind.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-K8QYYPXTLR",
          anonymizeIP: true,
        },
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/imdeepmind/imdeepmind.github.io/blob/main",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.8,
          filename: "sitemap.xml",
        },
        blog: {
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({ content, locale, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({
              content,
              locale,
              options: { wordsPerMinute: 300 },
            }),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
    "@docusaurus/theme-mermaid",
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.png",
    math: {
      katex: true,
    },
    navbar: {
      title: "abhishek chatterjee",
      logo: {
        alt: "imdeepmind logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Notes",
        },
        { to: "blog", label: "Blogs", position: "left" },
        {
          href: "https://rocketapi.net",
          label: "Rocket",
          position: "right",
        },
        {
          href: "https://gallery.imdeepmind.com",
          label: "Gallery",
          position: "right",
        },
        {
          href: "https://linkedin.com/in/imdeepmind",
          label: "LinkedIn",
          position: "right",
        },
        {
          href: "https://github.com/imdeepmind",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Notes",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Profile.fyi",
              href: "https://profile.fyi/imdeepmind",
            },
            {
              label: "GitHub",
              href: "https://github.com/imdeepmind",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/imdeepmind",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://blog.rocketapi.net",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abhishek Chatterjee. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
