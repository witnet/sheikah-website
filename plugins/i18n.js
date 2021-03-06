import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: navigator.language || navigator.languages[0],
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      es: require('~/locales/es.json'),
      it: require('~/locales/it.json'),
      ja: require('~/locales/ja.json'),
      zh: require('~/locales/zh.json'),
    },
  })
}
