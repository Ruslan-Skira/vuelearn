<template>
  <div>
    <h1>Choose your message:</h1>
    <ol class="message-list">
      <li v-for="(msg, index) in messages" :key="index">
        <router-link class="message-list__link" :to="'/valentine/' + index">{{ msg }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import messages from "../messages.js";

export default {
  name: "CreateValentinePage",
  data: () => ({
    messages,
  }),
};
</script>

<style scoped lang="scss">
h1 {
  color: #444;
}

.message-list {
  width: 100%;
  max-width: 800px;
  text-align: left;
  color: #444;

  li {
    margin-bottom: 10px;
  }

  &__link {
    color: #42b983;
  }
}
</style>
