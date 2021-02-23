export default function ({ isHMR, app, store, params, error }) {
  const defaultLocale = app.i18n.fallbackLocale

  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return
  }

  // Get locale from params, navigator, or default
  const locale = (params.lang || defaultLocale).split('-')[0]

  if (!store.state.locales.includes(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = locale
}
