import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://lhb1936319431.github.io/',
  lang: 'zh-CN',
  title: '山河不入梦の博客',
  subtitle: '一个人的世界',
  author: {
    name: 'lhb-初入江湖',
    avatar: '/favicon.svg',
    status:{
      emoji: '💰',
      message: '修行中...',
    },
  },
  description: '记录生活点滴，分享技术心得.',

  favicon: '/favicon.svg',

  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://www.bilibili.com/',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '**请联系我**',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: '**请联系我**',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: '**请联系我**',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
