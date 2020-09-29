export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  const defaultLocale = app.i18n.fallbackLocale
  const i18nLocale = app.i18n.locale
  const i18nLang = i18nLocale.includes('-')
    ? i18nLocale.split('-')[0]
    : i18nLocale
  const validBrowserLocale = store.state.locales.find((l) => l === i18nLang)

  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return
  }
  // Get locale from params
  const locale = params.lang || validBrowserLocale || defaultLocale
  if (!store.state.locales.includes(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === i18nLang &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(route.fullPath.replace(re, '/'))
  }
}
