<template>
  <div class="container">
    <div class="left-column">
      <div class="header">
        <img
          src="~/assets/svg/sheikah-icon.svg"
          alt="sheikah logo"
          class="logo"
        />
        <h1 class="logo-title">Sheikah <span class="wallet">Wallet</span></h1>
      </div>
      <h2 class="title">
        Get Sheikah,
        <br />
        your Witnet wallet
      </h2>
      <p class="description">
        Sheikah keeps your Witnet tokens safe and helps you build, share and
        deploy data requests into the Witnet network.
      </p>
      <div class="links">
        <a
          href="https://github.com/witnet/sheikah/releases/download/0.2.0/sheikah-witnet-wallet-0.2.0.AppImage"
          download="Sheikah GNU/Linux"
        >
          <ElButton type="primary">Download Sheikah for GNU/Linux </ElButton>
        </a>
        <a class="link" href="" download="Sheikah macOS">
          <ElButton type="primary">Download Sheikah for macOS</ElButton>
        </a>
      </div>
      <p class="footer">
        Check out the source code on
        <a href="https://github.com/witnet/sheikah" target="_blank">GitHub</a>
      </p>
    </div>
    <img class="app-image" src="~/assets/svg/app-image.svg" alt="app image" />
  </div>
</template>

<script>
export default {}
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
  background: url(../assets/svg/sheikah-icon-in-background.png) right no-repeat;
  .left-column {
    max-width: 500px;
  }
  .app-image {
    width: 600px;
    margin-left: 112px;
  }
  .header {
    display: flex;
    align-items: center;
    .logo-title {
      margin-left: 16px;
      font-size: 36px;
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
    font-size: 48px;
    font-weight: bolder;
    margin-top: 32px;
  }
  .description {
    color: $grey;
    font-weight: 400;
    margin-top: 16px;
    text-align: left;
    font-size: 22px;
  }
  .links {
    display: flex;
    margin-top: 24px;
    .link {
      margin-left: 8px;
    }
  }
  .footer {
    color: $grey;
    text-align: left;
    margin-top: 24px;
  }
}
</style>
