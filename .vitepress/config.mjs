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
      // 谷歌统计代码
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-RCN76ZQ9VN' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RCN76ZQ9VN');`
      ],
      
      // 百度统计代码
      [
        'script', 
        {}, 
        `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?f43715192be90c17a095ac8388770b67";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `
      ],
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
