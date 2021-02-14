<template>
  <v-app id="app">
    <a href="/" class="home-link">
      <v-icon large color="black">
        mdi-gift
      </v-icon>
    </a>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  margin: 0;
}

#app,
.v-application--wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

h1 {
  color: #555;
}

.home-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  opacity: 0.3;
}
</style>
