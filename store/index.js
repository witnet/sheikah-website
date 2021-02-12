export const state = () => ({
  locales: ['en', 'es', 'it', 'ja', 'zh'],
  locale: '',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
