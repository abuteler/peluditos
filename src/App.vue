<template>
  <div id="app">
    <div id="app-head" class="md-layout">
      <div class="md-layout-item"></div>
      <md-avatar class="md-layout-item md-size-10 logo-container">
        <img alt="logo" class="logo" src="./assets/logo-blanco.png">
      </md-avatar>
      <div id="nav" class="md-layout-item md-size-45">
        <router-link to="/home" class="nav-link">Home</router-link> |
        <router-link to="/pets-listing" class="nav-link">Mascotas listadas</router-link> |
        <router-link to="/about" class="nav-link italics">Peluditos</router-link>
      </div>
      <div class="md-layout-item"></div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #app-head {
    padding: 10px;
    .logo-container {
      background-color: #c9daf8;
      .logo {
        height: 90px;
      }
    }
    #nav {
      height: 90px;
      padding-top: 50px;
      font-size: 15px;
      text-align: left;
      a.nav-link {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
        &.italics {
          font-weight: 500;
        }
      }
    }
  }
}


</style>
