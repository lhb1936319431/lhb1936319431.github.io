import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'http://lhb1936319431.github.io',
  lang: 'zh-CN',
  title: 'lhb的博客小站',
  subtitle: '初出茅庐，问剑江湖',
  author: {
    name: 'lhb',
    avatar: 'https://pic1.zhimg.com/v2-569ed873fd835389e1ad2ecb3a7d28cb_r.jpg?source=1940ef5c',
    status: {
      emoji: '🪫',
      message: ''
    },
  },

  description: '记录日常生活的点点滴滴',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1050554177',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'github',
      link: 'https://github.com/lhb1936319431',
      icon: 'i-ri-github-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.5
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      // threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  sponsor: {
    enable: true,
    title: '赞助',
    description: '打赏咯！天上掉馅饼！',
    methods: [
      {
        name: '支付宝',
        url: 'https://pic.616pic.com/ys_bnew_img/00/45/51/mtTJeNJtB1.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://pic.616pic.com/ys_bnew_img/00/45/51/mtTJeNJtB1.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://pic.616pic.com/ys_bnew_img/00/45/51/mtTJeNJtB1.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

})
