<template>
  <div class="wrapper">
    <div class="page">
      <div v-if="!link">
        <div class="title">{{ tr("createValentinePage_createYourMessage") }}:</div>
        <div>
          <v-textarea
            :label="tr('createValentinePage_messageInputLabel') + ' *'"
            auto-grow
            rows="1"
            max="400"
            v-model="message"
          ></v-textarea>
          <p>{{ tr("createValentinePage_ifAnonimus") }}</p>
          <v-text-field :label="tr('createValentinePage_fromInputLabel')" max="100" v-model="sender"></v-text-field>
          <v-text-field :label="tr('createValentinePage_toInputLabel')" max="200" v-model="receiver"></v-text-field>
          <div>
            <v-btn class="create-button" color="primary" @click="onSubmit" :disabled="!message">
              {{ tr("createValentinePage_createBtn") }}
            </v-btn>
          </div>
        </div>
        <br />
        <div class="title">{{ tr("createValentinePage_chooseExisting") }}:</div>
        <ol class="message-list">
          <li v-for="(msg, index) in messages" :key="index">
            <div class="message-list__link" @click="chooseMessage(msg)" v-html="msg"></div>
          </li>
        </ol>
      </div>
      <div v-else>
        <p>{{ tr("createValentinePage_created") }}</p>
        <v-btn @click="copyTextToClipboard(link)" color="primary">Copy Link</v-btn>
        <p class="break-all">{{ link }}</p>
        <p><br /></p>
        <a :href="link">see your Valentine</a>
      </div>
    </div>
  </div>
</template>

<script>
import messages from "../messages.js";
import { encode } from "js-base64";
import { tr } from "../translations";
import { addCard } from "../cards-api";

export default {
  name: "CreateValentinePage",
  data: () => ({
    message: "",
    sender: "",
    receiver: "",
    link: "",
    copied: false,
    card: null,
    messages,
  }),
  methods: {
    tr,
    onSubmit() {
      // const msg = encode(this.message);
      // const s = encode(this.sender);
      // const params = { msg, s };
      // const queryString = Object.keys(params)
      //   .map((key) => {
      //     return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      //   })
      //   .join("&");
      // this.link = window.location.origin + "/valentine?" + queryString;

      this.saveCard();
      // this.$router.push({ path: "/valentine", query: { msg, s } });
    },
    chooseMessage(msg) {
      this.message = msg;
    },
    copyTextToClipboard(str) {
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      this.copied = true;
    },
    saveCard() {
      addCard({
        message: encode(this.message),
        sender: encode(this.sender),
        receiver: encode(this.receiver),
      }).then((card) => {
        this.card = card;
        this.link = window.location.origin + "/valentine/" + card.id;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.message-list {
  width: 100%;
  max-width: 800px;
  text-align: left;
  color: #444;

  li {
    margin-bottom: 0.5em;
    margin-left: 2.5em;
    margin: 0 1em 0.5em 2.5em;
  }

  &__link {
    color: #d31c99;
    text-decoration: none;
    cursor: pointer;
  }
}

.title {
  color: #555;
  font-size: 2em;
  margin: 0.5em 0;
}

.break-all {
  word-break: break-all;
}

.wrapper {
  display: block;
  height: 100%;
  width: 100%;
}

.page {
  padding: 60px 16px 16px;
  max-width: 600px;
  margin: 0 auto;
}

.create-button {
  background: #c2185b;
}
</style>
