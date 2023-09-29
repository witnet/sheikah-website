import { DEFAULT_OS } from './constants'

export function getBrowserOs(navigator) {
  const supportedOs = ['Win', 'Mac', 'Linux']
  const platform = navigator.platform

  return supportedOs.find(os => platform.includes(os)) || DEFAULT_OS
}
