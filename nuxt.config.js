export default defineNuxtConfig({
  // router: {
  //   base: '/',
  // },
  components: ['~/components'],
  ssr: true,
  app: {
    head: {
      title: 'Get Sheikah, your Witnet wallet.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Get Sheikah wallet',
        },

        { name: 'theme-color', content: '#b566ff' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Get Sheikah' },
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
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Catamaran:wght@200&family=Noto+Sans:wght@700&family=Raleway:wght@800&family=Roboto&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  css: ['@/styles/main.scss', '@/styles/colors.scss'],
  // vite: {
  //   resolve: {
  //     alias: {
  //       // 'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
  //     },
  //   },
  //   plugins: [
  //     VueI18nVitePlugin({
  //       include: [
  //         resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
  //       ],
  //     }),
  //   ],
  // },
})
