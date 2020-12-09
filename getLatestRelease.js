import axios from 'axios'
import { getBrowserOs } from '@/getBrowserOs'
import { URL_RELEASE_BASE } from './constants'

export async function getLatestRelease() {
  return await axios.get(URL_RELEASE_BASE).then(async (result) => {
    const os = await getBrowserOs().toLowerCase()
    const macRelease = await result.data.assets.find((asset) =>
      asset.browser_download_url.includes('.dmg')
    )
    const linuxRelease = await result.data.assets.find((asset) =>
      asset.browser_download_url.includes('.AppImage')
    )
    const windowsRelease = await result.data.assets.find((asset) =>
      asset.browser_download_url.includes('.exe')
    )
    const release = {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: linuxRelease.browser_download_url,
        downloadName: linuxRelease.name,
      },
      win: {
        platform: 'Windows',
        releaseUrl: windowsRelease.browser_download_url,
        downloadName: windowsRelease.name,
      },
      mac: {
        platform: 'Mac OS',
        releaseUrl: macRelease.browser_download_url,
        downloadName: windowsRelease.name,
      },
    }
    return release[os]
  })
}
