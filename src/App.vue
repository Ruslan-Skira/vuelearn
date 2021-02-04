<template>
  <div id="app">
    <div class="content">
      <HeartCard :msg="msg[0]" />
      <div class="heart-img">
        <img alt="Vue logo" color="#333" src="./assets/heart-black.svg" />
      </div>
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
      msg: ["You are the only one I have"],
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

@keyframes showAnimation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce-4 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  15% {
    transform: scale(1.1, 1.1) translateY(0);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
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

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation-duration: 2s;
  animation-name: showAnimation;
  animation-timing-function: ease;
}

.heart-img {
  animation-duration: 1.5s;
  animation-name: bounce-4;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  width: 300px;
  filter: invert(62%) sepia(81%) saturate(7499%) hue-rotate(310deg) brightness(100%) contrast(98%);
}
</style>
