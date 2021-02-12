<template>
  <HeartCard :message="message" />
</template>

<script>
import HeartCard from "../components/HeartCard";
import messages from "../messages.js";

export default {
  name: "ValentinesPage",
  computed: {
    message() {
      return messages[this.$route.params.id || 0];
    },
  },
  components: {
    HeartCard,
  },
};
</script>
