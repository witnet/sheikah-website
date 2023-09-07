<template>
  <a
    v-if="release.platform"
    class="link"
    :href="release.releaseUrl"
    :download="release.downloadName"
  >
    <button class="btn">
      <i18n path="download" tag="span">
        <template v-slot:platform>
          <span>{{ release.platform }}</span>
        </template>
      </i18n>
    </button>
  </a>
  <a
    v-else
    class="link"
    href="https://github.com/witnet/sheikah/releases/latest"
  >
    <ElButton class="btn" type="primary">{{ $t('head.name') }}</ElButton>
  </a>
</template>

<script>
import { getLatestRelease } from '@/getLatestRelease'

export default {
  async fetch() {
    this.release = await getLatestRelease(navigator)
  },
  fetchOnServer: false,
  data() {
    return {
      release: {
        releaseUrl: '',
        downloadName: '',
        platform: '',
      },
    }
  },
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

.btn {
  background-color: $purple-0;
  border-color: $purple-0;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  min-height: 60px;
  outline: 0;
  padding: 12px 20px;
  text-align: center;
  width: 100%;

  &:hover,
  &:focus {
    background: $purple-6;
    border-color: $purple-6;
  }
  &:active {
    border-color: $purple-3;
  }
}
</style>
