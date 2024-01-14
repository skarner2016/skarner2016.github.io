import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "skarner",
  description: "skarner's website",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.webp',
    // siteTitle: false,
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'MySQL',
        items: [
          { text: 'Replication', link: '/mysql/replication' },
          { text: 'Standard', link: '/mysql/standard' }
        ]
      },
      {
        text: 'Redis',
        items: [
          { text: 'Standard', link: '/redis/standard' },
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: 'Ubuntu Install PHP8', link: '/linux/install-php8-on-ubuntu' },
          { text: 'Command Alias', link: '/linux/alias' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
