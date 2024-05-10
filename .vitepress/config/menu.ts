import { type DefaultTheme } from 'vitepress';

export function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '🛋️ 首页',
      link: '/',
    },
    {
      text: '🖥️ 前端',
      items: [
        // { text: 'JS', link: '/frontend/js/' },
        { text: 'Vue', link: '/frontend/vue/' },
        { text: 'React', link: '/frontend/react/' },
      ],
    },
    {
      text: '🤖 后端',
      link: '/backend/',
      // items: [
      //   { text: "NodeJs", link: "/backend/nodejs" },
      //   { text: "MongoDB", link: "/backend/mongodb" },
      //   { text: "Redis", link: "/backend/redi/" },
      // ],
    },
    {
      text: '✨ 专栏',
      items: [
        // { text: "性能优化", link: "/optimize/" },
        { text: '😶‍🌫️ 面试题', link: '/interview/' },
      ],
    },
    {
      text: '📁 资源',
      items: [
        { text: '📲 导航', link: '/resource/nav' },
        { text: '🧹 工具', link: '/resource/tool' },
      ],
    },
    // {
    //   text: "📑 笔记",
    //   link: "/note/",
    // },
    // {
    //   text: "🔧 0.1.0",
    //   items: [
    //     { text: "🗒️ 更新日志", link: "#" },
    //     { text: "⚒️ 参与贡献", link: "#" },
    //   ],
    // },
  ];
}

export function sidebar(): DefaultTheme.Sidebar {
  return {
    '/': [
      {
        items: [
          {
            text: 'MarkDown 语法',
            link: '/guide/markdown',
          },
        ],
      },
      {
        items: [
          {
            text: 'Git 指南',
            link: '/note/git',
          },
        ],
      },
    ],
    '/frontend/js/': [
      {
        text: '开始',
        items: [
          { text: 'JS基础', link: '/frontend/js/js' },
          { text: 'JQuery', link: '/frontend/js/jquery' },
          { text: 'AJAX', link: '/frontend/js/Ajax' },
          { text: 'ES6', link: '/frontend/js/es6' },
          { text: 'TS', link: '/frontend/js/ts' },
        ],
      },
    ],
    '/frontend/vue/': [
      {
        text: '原理解析',
        items: [{ text: '响应式原理', link: '/frontend/vue/响应式原理' }],
      }
    ],
    // "/frontend/react/": [
    //   {
    //     text: "面试题",
    //     collapsed: false,
    //     items: [
    //       { text: "什么是 VitePress？", link: "what-is-vitepress" },
    //       { text: "快速开始", link: "getting-started" },
    //       { text: "路由", link: "routing" },
    //       { text: "部署", link: "deploy" },
    //     ],
    //   },
    //   {
    //     text: "Vue",
    //     collapsed: true,
    //     items: [{ text: "Vue3", link: "/interview/vue" }],
    //   },
    // ],
    '/interview/': [
      {
        text: '基础',
        collapsed: false,
        items: [
          {
            text: 'HTML-CSS',
            link: '/interview/html/CSS-HTML',
          },
          {
            text: 'ES6',
            link: '/interview/js/ES基础知识点',
          },
          {
            text: 'WebAPI',
            link: '/interview/js/Web-API',
          },
        ],
      },
      {
        text: 'JavaScript',
        collapsed: false,
        items: [
          {
            text: '浏览器的运行机制',
            link: '/interview/js/浏览器的运行机制',
          },
          {
            text: '浏览器的渲染过程',
            link: '/interview/js/浏览器的渲染过程',
          },
          {
            text: '执行上下文',
            link: '/interview/js/执行上下文',
          },
          {
            text: '节流和防抖',
            link: '/interview/js/节流和防抖',
          },
          {
            text: 'Event Loop',
            link: '/interview/js/Event Loop',
          },
          {
            text: 'Promise',
            link: '/interview/js/Promise',
          },
        ],
      },
      {
        text: '框架',
        collapsed: false,
        items: [
          { text: 'Vue', link: '/interview/vue/' },
          { text: 'React', link: '/interview/react/' },
        ],
      },
      {
        text: '扩展',
        collapsed: false,
        items: [{ text: '服务端渲染', link: '/optimize/服务端渲染' }],
      },
      // {
      //   text: '项目',
      //   collapsed: false,
      //   items: [{ text: '场景', link: '/interview/project' }],
      // },
    ],
    '/backend/': [
      {
        text: 'NodeJs',
        collapsed: false,
        items: [{ text: '快速开始', link: '/backend/nodejs' }],
      },
      {
        text: 'MongoDB',
        collapsed: false,
        items: [{ text: '快速开始', link: '/backend/mongodb' }],
      },
      {
        text: 'Redis',
        collapsed: false,
        items: [{ text: '快速开始', link: '/backend/redis' }],
      },
    ],
  };
}
