import { GITHUB_RELEASE_URL, RELEASE_ASSET_NAME } from './constants'

export type Release = {
  platform: string
  releaseUrl: string
  downloadName: string | null
}

export type LatestReleaseResponse = {
  assets: Array<ReleaseAsset>
}

export type ReleaseAsset = {
  browser_download_url: string
  name: string | null
}

export function getLatestRelease({
  os,
  data,
}: {
  os: string
  data: LatestReleaseResponse | undefined
}): Release | null {
  if (data) {
    const macRelease: ReleaseAsset = data.assets.find((asset: ReleaseAsset) => {
      return asset.browser_download_url.includes(`.dmg`)
    }) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }
    const linuxRelease: ReleaseAsset = data.assets.find((asset: ReleaseAsset) =>
      asset.browser_download_url.includes('.AppImage'),
    ) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }
    const windowsRelease: ReleaseAsset = data.assets.find(
      (asset: ReleaseAsset) =>
        asset.browser_download_url.includes('.exe') &&
        asset.browser_download_url.includes(RELEASE_ASSET_NAME),
    ) ?? { browser_download_url: GITHUB_RELEASE_URL, name: null }

    const release: Record<string, Release> = {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: linuxRelease.browser_download_url,
        downloadName: linuxRelease.name,
      },
      macos: {
        platform: 'Mac OS',
        releaseUrl: macRelease.browser_download_url,
        downloadName: macRelease.name,
      },
      windows: {
        platform: 'Windows',
        releaseUrl: windowsRelease.browser_download_url,
        downloadName: null,
      },
    }
    return release[os]
  }
  return null
}
