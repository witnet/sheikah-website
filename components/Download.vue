<script setup>
import { onBeforeMount } from 'vue'
import { getLatestRelease } from '@/getLatestRelease'

const release = ref({
  releaseUrl: '',
  downloadName: '',
  platform: '',
})

onBeforeMount(async () => {
  release.value = await getLatestRelease(navigator)
})
</script>

<template>
  <a
    v-if="release.platform"
    class="link"
    :href="release.releaseUrl"
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
    <button class="btn" type="primary">{{ $t('head.name') }}</button>
  </a>
</template>

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
