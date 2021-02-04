<template>
  <div class="heart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeartCard",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0;
  padding: 1em;
  font-size: 24px;
}
</style>
