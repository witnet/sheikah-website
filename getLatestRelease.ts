import axios from 'axios'
import { URL_RELEASE_BASE } from './constants'
import { getBrowserOs } from '@/getBrowserOs'

type Release = {
  platform: String
  releaseUrl: String
  downloadName: String
}

export async function getLatestRelease(navigator: any): Promise<Release> {
  return await axios.get(URL_RELEASE_BASE).then(async (result: any) => {
    const os = await getBrowserOs(navigator).toLowerCase()
    const macRelease = await result.data.assets.find((asset: any) => {
      return asset.browser_download_url.includes('.dmg')
    })
    const linuxRelease = await result.data.assets.find((asset: any) =>
      asset.browser_download_url.includes('.AppImage'),
    )
    const windowsRelease = await result.data.assets.find((asset: any) => {
      return (
        asset.browser_download_url.includes('.exe') &&
        asset.browser_download_url.includes('Sheikah-Witnet-wallet')
      )
    })
    const release: Record<string, Release> = {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: linuxRelease.browser_download_url,
        downloadName: linuxRelease.name,
      },
      win: {
        platform: 'Windows',
        releaseUrl: windowsRelease.browser_download_url,
        downloadName: 'sheikah',
      },
      mac: {
        platform: 'Mac OS',
        releaseUrl: macRelease.browser_download_url,
        downloadName: macRelease.name,
      },
    }
    return release[os]
  })
}
