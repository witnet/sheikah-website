export const state = () => ({
  locales: ['en', 'es', 'ja'],
  locale: '',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
