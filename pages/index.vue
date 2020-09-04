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
          class="link"
          href="https://github.com/witnet/sheikah/releases/download/0.2.0/sheikah-witnet-wallet-0.2.0.AppImage"
          download="Sheikah GNU/Linux"
        >
          <ElButton class="btn" type="primary">
            Download Sheikah for GNU/Linux
          </ElButton>
        </a>
        <a class="link" href="" download="Sheikah macOS">
          <ElButton class="btn" type="primary">
            Download Sheikah for macOS
          </ElButton>
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
    margin-top: 32px;
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
    .link {
      &:last-of-type {
        margin-left: 8px;
      }
    }
  }
  .footer {
    color: $grey;
    text-align: left;
    margin-top: 16px;
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
        width: 100%;
        flex-direction: row;
      }
      .btn {
        width: 100%;
      }
      .link {
        width: 100%;
        &:last-of-type {
          margin-left: 8px;
          justify-content: center;
        }
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
      .link:last-of-type {
        margin-top: 8px;
        margin-left: 0;
        justify-content: center;
      }
    }
  }
}
</style>
