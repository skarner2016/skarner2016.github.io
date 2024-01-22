import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "skarner",
  description: "skarner's website",
  srcDir: './src',
  base: '/',
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.webp',
    // siteTitle: false,
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    head: [
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=GTM-NZ4G5TGH' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-NZ4G5TGH');`
      ]
    ],
    sidebar: [
      {
        text: 'MySQL',
        items: [
          { text: '使用规范', link: '/mysql/standard' },
          { text: '主从同步', link: '/mysql/replication' },
        ]
      },
      {
        text: 'Redis',
        items: [
          { text: '使用规范', link: '/redis/standard' },
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: 'Ubuntu安装PHP8', link: '/linux/install-php8-on-ubuntu' },
          { text: '自定义命令别名', link: '/linux/alias' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skarner2016' }
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
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
  }
})
