<template>
  <HeartCard v-if="card" :message="card.message" :sender="card.sender" />
  <div v-else-if="!loading">
    <p>Unable to find Valentine</p>
    <v-btn href="/create-valentine" color="primary">Create new</v-btn>
  </div>
</template>

<script>
import HeartCard from "../components/HeartCard";
import { getCardById } from "../cards-api";
import { decode } from "js-base64";

export default {
  name: "ValentinesPage",
  data() {
    return {
      card: null,
      loading: true,
    };
  },
  mounted() {
    getCardById(this.$route.params.id)
      .then((card) => {
        this.loading = false;
        if (card) {
          this.card = {
            id: card.id,
            message: decode(card.message),
            sender: decode(card.sender),
            receiver: decode(card.receiver),
          };
        }
      })
      .catch(() => {
        this.loading = false;
      });
  },
  components: {
    HeartCard,
  },
};
</script>
