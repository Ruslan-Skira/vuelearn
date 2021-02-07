<template>
  <div id="app">
    <HeartCard :msg="msg[0]" />
  </div>
</template>

<script>
import HeartCard from "./components/HeartCard.vue";

export default {
  name: "App",
  components: {
    HeartCard,
  },
  data: () => {
    return {
      msg: ["I love you baby"],
    };
  },
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
}

#app {
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
</style>
