import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      es: require('~/locales/es.json'),
      it: require('~/locales/it.json'),
      ja: require('~/locales/ja.json'),
      zh: require('~/locales/zh.json'),
    },
  })

  if (process.client) {
    app.i18n.locale = store.state.locale
  }
}
