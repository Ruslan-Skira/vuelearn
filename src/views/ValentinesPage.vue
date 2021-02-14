<template>
  <HeartCard :message="message" :sender="sender" />
</template>

<script>
import HeartCard from "../components/HeartCard";
import messages from "../messages.js";
import { decode } from "js-base64";

export default {
  name: "ValentinesPage",
  computed: {
    message() {
      if (this.$route.query.msg) {
        const msg = decode(this.$route.query.msg);
        return msg;
      }
      return messages[this.$route.params.id || 0];
    },
    sender() {
      if (this.$route.query.s) {
        const sender = decode(this.$route.query.s);
        return sender;
      }
      return "";
    },
  },
  components: {
    HeartCard,
  },
};
</script>
