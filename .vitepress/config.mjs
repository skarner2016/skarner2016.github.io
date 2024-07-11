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
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/about_me' }
    ],
    head: [
      [
        'link', 
        { rel: 'icon', href: '/images/favicon.ico' }
      ],
      [
        'link', 
        { rel: 'meta', href: '/images/favicon.ico' }
      ],      
      // 百度统计代码
      ['script', {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?f43715192be90c17a095ac8388770b67";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "jud16drf49");
      `
      ]
    ],
    sidebar: [
      { 
        text: 'AboutMe', 
        link: '/about_me' 
      },
      {
        text: "Blog",
        items: [
          {
            text: '2024',
            collapsed: false,
            items: [
              { text: '国内可用的dockerhub镜像', link: '/other/docker_registry_mirror' },
              { text: 'HTPC', link: '/other/htpc' },
            ]
          },
          {
            text: '2023',
            collapsed: false,
            items: [
              { text: 'PHP SSE聊天室', link: '/php/sse_chat' },
              { text: 'PHP8-JIT简介', link: '/php/jit' },
              { text: 'Laravel/Ocane/Webman对比', link: '/php/laravel_octane_webman' },
              { text: 'PHP常见问题', link: '/php/qa' },
              { text: 'MySQL使用规范', link: '/mysql/standard' },
              { text: 'MySQL索引失效', link: '/mysql/index_invalid' },
              { text: 'MySQL count()效率', link: '/mysql/count' },
              { text: 'MySQL主从同步', link: '/mysql/replication' },
              { text: 'Redis使用建议', link: '/redis/standard' },
              { text: 'Ubuntu安装PHP8', link: '/linux/install-php8-on-ubuntu' },
              { text: 'Linux命令别名', link: '/linux/alias' },
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skarner2016' }
    ],
    // 搜索
    search: {
      provider: 'local'
    },
    // 文章右侧目录展示级别和标题
    outline: {
      level: [2, 6],
      label: '目录导航'
    },
    // 更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇', 
      next: '下一篇',
    },
    footer: {
      message: 'Powered by <a href="https://vitepress.dev/">Vitepress</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/skarner2016">Skarner</a>'
    },
  }
})
