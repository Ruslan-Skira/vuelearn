<template>
  <div class="links">
    <div>
      <router-link to="/create-valentine">Create Valentine Card</router-link>
    </div>
    <div>
      <router-link to="/birthday">Create Birthday Card</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLinks",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
