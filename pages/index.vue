<template>
  <div class="container">
    <div class="left-column">
      <div class="header">
        <img
          src="~/assets/svg/sheikah-icon.svg"
          alt="sheikah logo"
          class="logo"
        />
        <i18n-t tag="h1" keypath="logo.template" class="logo-title">
          <span>{{ $t('logo.sheikah') }}</span>
          <span class="wallet">{{ $t('logo.wallet') }}</span>
        </i18n-t>
      </div>
      <i18n-t tag="h2" keypath="title" class="title">
        <br />
      </i18n-t>
      <p class="description">{{ $t('description') }}</p>
      <div class="links">
        <client-only>
          <DownloadBtn />
        </client-only>
      </div>
      <i18n-t keypath="source_code" tag="p" class="footer">
        <template #github>
          <a href="https://github.com/witnet/sheikah" target="_blank">
            Github
          </a>
        </template>
      </i18n-t>
    </div>
    <img
      class="app-image"
      src="~/assets/png/sheikah-app-image.png"
      alt="app image"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      name: 'index',
      title: this.$t('head.title'),
      meta: [
        {
          name: this.$t('head.title'),
          content: this.$t('description'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.container {
  margin: 0 auto;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .left-column {
    max-width: 500px;
    display: grid;
    gap: 16px;
    .header {
      margin-top: 24px;
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 16px;
      align-items: center;
      .logo-title {
        font-size: 2em;
        color: $alt-grey;
        font-weight: bold;
        font-family: 'Catamaran';
        .wallet {
          font-weight: normal;
        }
      }
    }
    .title {
      color: $black;
      font-family: 'Raleway';
      text-align: left;
      font-size: 3em;
      font-weight: bolder;
      max-width: 500px;
    }
    .description {
      color: $grey;
      font-weight: 400;
      text-align: left;
      font-size: 1.3em;
    }
    .links {
      display: flex;
      width: 100%;
      .link {
        width: 100%;
      }
    }
  }
  .app-image {
    width: 600px;
    margin-left: 112px;
    box-shadow: 0px 6px 30px 5px rgba(68, 66, 87, 0.25);
    border-radius: 8px;
  }
  .footer {
    color: $grey;
    text-align: left;
  }
}

@media (max-width: 1200px) {
  .container {
    display: flex;
    justify-content: center;
    .app-image {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .container {
    align-items: flex-start;
    margin: 0 24px;
  }
}

@media (max-width: 300px) {
  .container {
    align-items: flex-start;
    margin: 0 16px;
    .left-column {
      .title {
        font-size: 2em;
      }
    }
  }
}
</style>
