<template>
  <div class="links">
    <h1>{{ tr("navLinks_createGiftCard") }}</h1>
    <div class="card">
      <router-link to="/create-valentine">{{ tr("navLinks_createVilentineBtn") }}</router-link>
    </div>
    <div>
      <router-link to="/birthday">{{ tr("navLinks_createBirthdayBtn") }} </router-link>
    </div>
  </div>
</template>

<script>
import { tr } from "../translations";

export default {
  name: "NavLinks",
  methods: {
    tr,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 16px;
  margin: 8px;
}
a {
  color: #0d6c41;
  font-size: 20px;
}
</style>
