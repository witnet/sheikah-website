<template>
  <a
    v-if="release.platform"
    class="link"
    :href="release.releaseUrl"
    :download="release.downloadName"
  >
    <ElButton class="btn" type="primary">
      <i18n path="download" tag="span">
        <template v-slot:platform>
          <span>{{ release.platform }}</span>
        </template>
      </i18n>
    </ElButton>
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
  data() {
    return {
      release: {},
    }
  },
  async beforeMount() {
    this.release = await getLatestRelease()
  },
}
</script>
