<template>
  <div class="heart__bg">
    <div class="heart__content">
      <div v-if="step === 0" class="heart__img" @click="next">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 122.88 107.41"
          xml:space="preserve"
        >
          <g>
            <path
              class="st0"
              d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
            />
          </g>
        </svg>
      </div>
      <div v-if="step === 1">
        {{ sender ? "" : next() }}
        <h1 class="heart__title">{{ tr("valentine_guessTitle") }}:</h1>
        <v-text-field :label="tr('createValentinePage_fromInputLabel')" @keyup="nameChanged"></v-text-field>
        <div :class="{ 'secondary-text try-text': true, visible: tryAgain }">
          {{ tr("valentine_guessWrong") }}
        </div>
      </div>
      <div v-if="step === 2" class="centered">
        <div class="heart__img heart__img--small">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 107.41"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
              />
            </g>
          </svg>
        </div>
        <div class="heart__title" @click="clicked = false" v-html="message"></div>
        <div v-if="sender" class="sender">{{ sender }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { tr } from "../translations";

export default {
  name: "HeartCard",
  props: {
    message: String,
    sender: String,
  },
  data: () => {
    return {
      step: 0,
      tryAgain: false,
    };
  },
  methods: {
    tr,
    next() {
      this.step = this.step + 1;
    },
    nameChanged(e) {
      const name = e.target.value;
      this.tryAgain = false;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (name === this.sender) {
          this.next();
        } else {
          this.tryAgain = true;
        }
      }, 400);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heart__bg {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff7ed6;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.heart__content {
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart__title {
  margin: 0;
  padding: 16px;
  font-size: 24px;
  color: #d31c99;
  cursor: pointer;
}

.secondary-text {
  color: #d31c99;
}

.try-text {
  opacity: 0;

  &.visible {
    opacity: 1;
  }
}

.sender {
  color: #6f0b4f;
  padding: 16px;
  text-align: right;
  width: 100%;
}

.heart__img svg {
  fill: #d31c99;
}

.heart__content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation-duration: 2s;
  animation-name: showAnimation;
  animation-timing-function: ease;
}

.heart__img {
  animation-duration: 1s;
  animation-name: bounce-4;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  width: 250px;
  cursor: pointer;

  &--small {
    width: 50px;
    cursor: default;
  }
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
  65% {
    transform: scale(1.02, 1.02) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
