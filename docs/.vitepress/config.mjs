import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/xiang-blog",
  title: "小向 代码空间",
  description: "小向 代码空间",
  themeConfig: {
    // sidebar: false, // 关闭侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle: "引导",
    "outline": [2, 6],
    // logo: 'logo.png'
    // https://vitepress.dev/reference/default-theme-config
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '学习指引', link: '/markdown-examples' },
      {
        text: 'JAVA',
        items: [
          { text: 'JAVA基础', link: '/java/Java基础.md' }
        ]
      }, {
        text: 'MYSQL',
        items: [
          { text: 'MYSQL45讲', link: '/MySQL/MYSQL45讲.md' }
        ]
      }, {
        text: '书籍',
        items: [
          { text: '趣谈网络协议', link: '/book/趣谈网络协议.md' }
        ]
      }
    ],

    // sidebar: { "/书籍": set_sidebar("book") },

    sidebar: {
      "/java": {
        text: 'Java',
        items: [
          {
            text: 'Java',
            items: [
              { text: 'Java基础', link: '/java/Java基础.md' }
            ]
          }
        ]
      },
      "/book": {
        text: '书籍',
        items: [
          {
            text: '书籍',
            items: [
              { text: '趣谈网络协议', link: '/book/趣谈网络协议.md' }
            ]
          }
        ]
      },
      "/MySQL": {
        text: 'MySQL',
        items: [
          {
            text: 'MySQL',
            items: [
              { text: 'MySQL45讲', link: '/MySQL/MYSQL45讲.md' }
            ]
          }
        ]
      }

    },

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/XiangChuan' }
    ], footer: {
      copyright: "Copyright @ 2024"
    }
  }
})
