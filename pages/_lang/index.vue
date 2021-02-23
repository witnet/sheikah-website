<template>
  <div class="container">
    <div class="left-column">
      <div class="header">
        <img
          src="~/assets/svg/sheikah-icon.svg"
          alt="sheikah logo"
          class="logo"
        />
        <i18n tag="h1" path="logo.template" class="logo-title">
          <span>{{ $t('logo.sheikah') }}</span>
          <span class="wallet">{{ $t('logo.wallet') }}</span>
        </i18n>
      </div>
      <i18n tag="h2" path="title" class="title">
        <br />
      </i18n>
      <p class="description">{{ $t('description') }}</p>
      <div class="links">
        <Download />
      </div>
      <i18n path="source_code" tag="p" class="footer">
        <template v-slot:github>
          <a href="https://github.com/witnet/sheikah">Github</a>
        </template>
      </i18n>
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
      title: this.$t('head.title'),
      meta: [
        {
          name: this.$t('head.name'),
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(../../assets/png/sheikah-icon-in-background.png) right
    no-repeat;
  .left-column {
    max-width: 500px;
  }
  .app-image {
    width: 600px;
    margin-left: 112px;
    box-shadow: 0px 6px 30px 5px rgba(155, 81, 224, 0.25);
  }
  .header {
    display: flex;
    align-items: center;
    .logo-title {
      margin-left: 16px;
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
    margin-top: 32px;
    max-width: 500px;
  }
  .description {
    color: $grey;
    font-weight: 400;
    margin-top: 16px;
    text-align: left;
    font-size: 1.3em;
  }
  .links {
    display: flex;
    margin-top: 24px;
    width: 100%;
    .link {
      width: 100%;
    }
  }
  .footer {
    color: $grey;
    text-align: left;
    margin-top: 16px;
  }
}

@media (max-width: 700px) {
  .container {
    .app-image {
      display: none;
    }
    .left-column {
      max-width: 90vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        margin-top: 16px;
      }
      .footer {
        margin-bottom: 16px;
      }
      .links {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .link {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 1200px) and (min-width: 768px) {
  .container {
    flex-direction: column;
    justify-content: space-around;
    .app-image {
      display: block;
      margin-left: 0;
    }
    .left-column {
      max-width: 90vw;
      .header {
        margin-top: 16px;
      }
      .footer {
        margin-bottom: 16px;
      }
      .links {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .link {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 700px) {
  .app-image {
    display: none;
  }
  .container {
    .left-column {
      max-width: 90vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        margin-top: 16px;
      }
      .footer {
        margin-bottom: 16px;
      }
      .links {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .link {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}
</style>
