import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

const safelist = [
  'i-ri-home-line',
]


export default defineValaxyConfig<UserThemeConfig>({

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '执笔造乾坤',
    },

    pages: [
      {
        name: '我的项目',
        url: '/project/',
        icon: 'i-ri-code-s-slash-line',
        color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2025,
      icon: {
        url: 'https://lhb1936319431.github.io/',
        title: 'lhb的博客小站'
      },
      beian: {
        enable: true,
        icp: '',
      },
    },
  },

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    }
  },

  unocss: { safelist },
})
