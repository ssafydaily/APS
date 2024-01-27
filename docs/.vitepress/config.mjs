import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar/index.mjs'
import { nav } from './nav/index.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Solving Problems",
  base: '/APS',
  description: "문제 해결하기",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-JongYun'
    },

    search: {
      provider: 'local'
    },
  }
})
