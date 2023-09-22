import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import es from '../locales/es.json'
import it from '../locales/es.json'
import ja from '../locales/ja.json'
import zh from '../locales/zh.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      es,
      it,
      ja,
      zh,
    },
  })

  vueApp.use(i18n)
})