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
    footer: {
      message: 'Powered by <a href="https://vitepress.dev/">Vitepress</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/skarner2016">Skarner</a>'
    },
    sidebar: [
      {
        text: 'PHP',
        collapsed: false,
        items: [
          { text: 'PHP8-JIT简介', link: '/php/jit' },
        ]
      },
      {
        text: 'MySQL',
        collapsed: false,
        items: [
          { text: '使用规范', link: '/mysql/standard' },
          { text: '索引失效', link: '/mysql/index_invalid' },
          { text: 'MySQL count()函数', link: '/mysql/count' },
          { text: '主从同步', link: '/mysql/replication' },
        ]
      },
      {
        text: 'Redis',
        collapsed: false,
        items: [
          { text: '使用规范', link: '/redis/standard' },
        ]
      },
      {
        text: 'Linux',
        collapsed: false,
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
