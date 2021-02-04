<template>
  <div id="app">
    <HeartCard :msg="msg[0]" />
    <div class="heart-img">
      <img alt="Vue logo" color="#333" src="./assets/heart-black.svg" />
    </div>
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
      msg: ["You are the best person I know"],
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
  color: #d31c99;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background: #ff7ed6;
}

.heart-img {
  width: 300px;
  filter: invert(19%) sepia(96%) saturate(5450%) hue-rotate(308deg) brightness(92%) contrast(86%);
}
</style>
