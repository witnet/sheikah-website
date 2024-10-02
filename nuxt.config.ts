import { languages } from './constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Get Sheikah, your Witnet wallet.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Download Sheikah, the desktop app that keeps your Witnet tokens safe and helps you build, share and deploy data requests into the Witnet network.',
        },
        { name: 'theme-color', content: '#b566ff' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:title',
          content: 'Get Sheikah, your Witnet wallet.',
        },
        {
          name: 'og:description',
          content:
            'Download Sheikah, the desktop app that keeps your Witnet tokens safe and helps you build, share and deploy data requests into the Witnet network.',
        },
        { name: 'og:image', content: '/sheikah.png' },
        { name: 'og:url', content: 'https://sheikah.app' },
        { name: 'og:locale:alternate', content: 'es_ES' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/sheikah.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Catamaran:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap',
        },
      ],
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      fallbackLocale: 'en',
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: Object.values(languages),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/styles/colors.scss" as *;',
        },
      },
    },
  },
  css: ['~/styles/main.scss'],
  components: true,
})
