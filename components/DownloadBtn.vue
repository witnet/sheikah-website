<template>
  <a
    v-if="release.platform"
    class="link"
    :href="release.releaseUrl"
    target="_blank"
    :download="release.downloadName"
  >
    <button class="btn">
      <i18n-t keypath="download" tag="span">
        <template #platform>
          <span>{{ release.platform }}</span>
        </template>
      </i18n-t>
    </button>
  </a>
  <a
    v-else
    class="link"
    href="https://github.com/witnet/sheikah/releases/latest"
  >
    <button class="btn">{{ $t('head.title') }}</button>
  </a>
</template>

<script setup>
import { getLatestRelease } from '../getLatestRelease'
const release = await getLatestRelease(navigator)
</script>

<style lang="scss">
.link {
  width: max-content;
  height: auto;
  display: flex;
}
</style>
