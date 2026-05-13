import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {
  DISCORD_URL,
  REDDIT_URL,
  TWITTER_URL,
  BLUESKY_URL,
  LINKEDIN_URL,
  TIKTOK_URL,
  GITHUB_MAIN_REPO_URL,
  GITHUB_ISSUES_MAIN_URL,
  GITHUB_FEATURES_URL,
  VSCODE_MARKETPLACE_URL,
  OPEN_VSX_URL,
  CONTACT_EMAIL,
  CAREERS_URL,
  WEBSITE_PRIVACY_URL,
  EXTENSION_PRIVACY_URL,
  GITHUB_REPO_URL,
  SIGN_IN_URL,
  SIGN_UP_URL
} from './src/constants';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Roo Code Documentation',
  tagline: 'AI-powered autonomous coding agent for VS Code - Complete documentation, guides, and tutorials',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.roocode.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config (if needed)
  organizationName: 'RooCodeInc',
  projectName: 'Roo-Code-Docs',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Custom fields for client-side access
  customFields: {
    intercomAppId: process.env.INTERCOM_APP_ID,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [
    require.resolve('./src/clientModules/scrollToAnchor.ts'),
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: `${GITHUB_REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: false, // Disable the built-in sitemap plugin to avoid conflicts
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        searchContextByPaths: [
          { label: "Getting Started", path: "getting-started" },
          { label: "Basic Usage", path: "basic-usage" },
          { label: "Features", path: "features" },
          { label: "Advanced Usage", path: "advanced-usage" },
          { label: "Providers", path: "providers" },
          { label: "Roo Code Cloud", path: "roo-code-cloud" },
          { label: "Release Notes", path: "update-notes" }
        ],
        useAllContextsWithNoSearchContext: true,
      },
    ],
  ],

  plugins: [
    ...(process.env.POSTHOG_API_KEY ? [
      [
        "posthog-docusaurus",
        {
          apiKey: process.env.POSTHOG_API_KEY,
          appUrl: "https://ph.roocode.com",
          enableInDevelopment: true,
        },
      ],
    ] : []),
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/'));
        },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Files moved from advanced-usage to features
          {
            to: '/features/checkpoints',
            from: ['/advanced-usage/checkpoints'],
          },
          {
            to: '/features/code-actions',
            from: ['/advanced-usage/code-actions'],
          },
          {
            to: '/features/custom-instructions',
            from: ['/advanced-usage/custom-instructions'],
          },
          {
            to: '/features/custom-modes',
            from: ['/advanced-usage/custom-modes'],
          },
          {
            to: '/features/enhance-prompt',
            from: ['/advanced-usage/enhance-prompt'],
          },
          {
            to: '/features/experimental/experimental-features',
            from: ['/advanced-usage/experimental-features'],
          },
          {
            to: '/features/concurrent-file-reads',
            from: ['/features/experimental/concurrent-file-reads'],
          },
          {
            to: '/features/model-temperature',
            from: ['/advanced-usage/model-temperature'],
          },
          {
            to: '/features/auto-approving-actions',
            from: ['/advanced-usage/auto-approving-actions'],
          },
          {
            to: '/features/api-configuration-profiles',
            from: ['/advanced-usage/api-configuration-profiles'],
          },
          {
            to: '/features/intelligent-context-condensing',
            from: ['/features/experimental/intelligent-context-condensing', '/features/experimental/intelligent-context-condensation'],
          },
          {
            to: '/features/experimental/experimental-features',
            from: ['/features/experimental/power-steering'],
          },
          {
            to: '/features/codebase-indexing',
            from: ['/features/experimental/codebase-indexing'],
          },
          
          // MCP related redirects
          {
            to: '/features/mcp/overview',
            from: ['/advanced-usage/mcp', '/mcp/overview'],
          },
          {
            to: '/features/mcp/using-mcp-in-roo',
            from: ['/mcp/using-mcp-in-roo'],
          },
          {
            to: '/features/mcp/what-is-mcp',
            from: ['/mcp/what-is-mcp'],
          },
          {
            to: '/features/mcp/server-transports',
            from: ['/mcp/server-transports'],
          },
          {
            to: '/features/mcp/mcp-vs-api',
            from: ['/mcp/mcp-vs-api'],
          },
          {
            to: '/features/shell-integration',
            from: ['/troubleshooting/shell-integration'],
          },
          
          // Removed available-tools section - redirect all old URLs to how-tools-work
          {
            to: '/basic-usage/how-tools-work',
            from: [
              '/features/tools/access-mcp-resource',
              '/features/tools/apply-diff',
              '/features/tools/ask-followup-question',
              '/features/tools/attempt-completion',
              '/features/tools/browser-action',
              '/features/tools/execute-command',
              '/features/tools/insert-content',
              '/features/tools/list-code-definition-names',
              '/features/tools/list-files',
              '/features/tools/new-task',
              '/features/tools/read-file',
              '/features/tools/search-files',
              '/features/tools/switch-mode',
              '/features/tools/tool-use-overview',
              '/features/tools/use-mcp-tool',
              '/features/tools/write-to-file',
              '/advanced-usage/available-tools/tool-use-overview',
              '/advanced-usage/available-tools/access-mcp-resource',
              '/advanced-usage/available-tools/apply-diff',
              '/advanced-usage/available-tools/apply-patch',
              '/advanced-usage/available-tools/ask-followup-question',
              '/advanced-usage/available-tools/attempt-completion',
              '/advanced-usage/available-tools/browser-action',
              '/advanced-usage/available-tools/codebase-search',
              '/advanced-usage/available-tools/edit',
              '/advanced-usage/available-tools/edit-file',
              '/advanced-usage/available-tools/execute-command',
              '/advanced-usage/available-tools/generate-image',
              '/advanced-usage/available-tools/insert-content',
              '/advanced-usage/available-tools/list-code-definition-names',
              '/advanced-usage/available-tools/list-files',
              '/advanced-usage/available-tools/new-task',
              '/advanced-usage/available-tools/read-command-output',
              '/advanced-usage/available-tools/read-file',
              '/advanced-usage/available-tools/run-slash-command',
              '/advanced-usage/available-tools/search-files',
              '/advanced-usage/available-tools/search-replace',
              '/advanced-usage/available-tools/skill',
              '/advanced-usage/available-tools/switch-mode',
              '/advanced-usage/available-tools/update-todo-list',
              '/advanced-usage/available-tools/use-mcp-tool',
              '/advanced-usage/available-tools/write-to-file',
            ],
          },
          {
            to: '/advanced-usage/roo-code-nightly',
            from: ['/advanced-usage/prerelease-build'],
          },
          // Redirect /roo to Roo Code Cloud documentation
          {
            to: '/providers/roo-code-router',
            from: ['/providers/roo'],
          },
          // Roo Code Router rename redirects
          {
            to: '/providers/roo-code-router',
            from: ['/providers/roo-code-cloud'],
          },
          {
            to: '/roo-code-router/overview',
            from: ['/roo-code-provider', '/roo-code-provider/overview'],
          },
          // Redirect deleted billing-subscriptions page
          {
            to: '/credits/overview',
            from: ['/roo-code-cloud/billing-subscriptions'],
          },
          // Redirect removed Human Relay provider page
          {
            to: '/',
            from: ['/providers/human-relay'],
          },
          // Redirect removed Claude Code provider page
          {
            to: '/',
            from: ['/providers/claude-code'],
          },

          // Redirect removed Fast Edits feature page
          {
            to: '/',
            from: ['/features/fast-edits'],
          },
          // Redirect removed Roomote Control page
          {
            to: '/roo-code-cloud/overview',
            from: ['/roo-code-cloud/roomote-control'],
          },

          // Redirect retired provider pages
          {
            to: '/providers',
            from: [
              '/providers/cerebras',
              '/providers/chutes',
              '/providers/deepinfra',
              '/providers/doubao',
              '/providers/featherless',
              '/providers/glama',
              '/providers/groq',
              '/providers/huggingface',
              '/providers/io-intelligence',
              '/providers/unbound',
            ],
          },

          // Redirect removed browser-use feature page
          {
            to: '/features',
            from: ['/features/browser-use'],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    // SEO metadata
    metadata: [
      {name: 'keywords', content: 'Roo Code, AI coding assistant, VS Code extension, autonomous coding agent, AI pair programmer, code generation, documentation'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@roocode'},
      {name: 'twitter:creator', content: '@roocode'},
      {property: 'og:type', content: 'website'},
      {property: 'og:locale', content: 'en_US'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: '/img/social-share.png', // Default Open Graph image
    navbar: {
      logo: {
        alt: 'Roo Code Logo',
        src: 'img/roo-code-logo-dark.svg',
        srcDark: 'img/roo-code-logo-white.svg',
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Roo Code Logo',
        src: 'img/roo-code-logo-dark.svg',
        srcDark: 'img/roo-code-logo-white.svg',
        width: 120,
        height: 24,
      },
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: DISCORD_URL,
            },
            {
              label: 'Reddit',
              href: REDDIT_URL,
            },
            {
              label: 'Twitter',
              href: TWITTER_URL,
            },
            {
              label: 'Bluesky',
              href: BLUESKY_URL,
            },
            {
              label: 'GitHub',
              href: GITHUB_MAIN_REPO_URL,
            },
            {
              label: 'LinkedIn',
              href: LINKEDIN_URL,
            },
            {
              label: 'TikTok',
              href: TIKTOK_URL,
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Issues',
              href: GITHUB_ISSUES_MAIN_URL,
            },
            {
              label: 'Feature Requests',
              href: GITHUB_FEATURES_URL,
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'VS Code Marketplace',
              href: VSCODE_MARKETPLACE_URL,
            },
            {
              label: 'Open VSX Registry',
              href: OPEN_VSX_URL,
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Contact',
              href: CONTACT_EMAIL,
              target: '_self',
            },
            {
              label: 'Careers',
              href: CAREERS_URL,
            },
            {
              label: 'Website Privacy Policy',
              href: WEBSITE_PRIVACY_URL,
            },
            {
              label: 'Extension Privacy Policy',
              href: EXTENSION_PRIVACY_URL,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
