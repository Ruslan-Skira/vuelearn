<template>
  <div class="wrapper">
    <div class="page">
      <div v-if="!link">
        <div class="title">{{ tr("createValentinePage_createYourMessage") }}:</div>
        <div>
          <v-textarea
            :label="tr('createValentinePage_messageInputLabel')"
            auto-grow
            rows="1"
            v-model="message"
          ></v-textarea>
          <v-text-field :label="tr('createValentinePage_fromInputLabel')" required v-model="sender"></v-text-field>
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
            <div class="message-list__link" @click="chooseMessage(msg)">{{ msg }}</div>
          </li>
        </ol>
      </div>
      <div v-else>
        <p>{{ tr("createValentinePage_copyLink") }}</p>
        <p>{{ link }}</p>
        <a :href="link">link</a>
      </div>
    </div>
  </div>
</template>

<script>
import messages from "../messages.js";
import { encode } from "js-base64";
import { tr } from "../translations";

export default {
  name: "CreateValentinePage",
  data: () => ({
    message: "",
    sender: "",
    link: "",
    messages,
  }),
  methods: {
    tr,
    onSubmit() {
      const msg = encode(this.message);
      const s = encode(this.sender);
      console.log(msg, s);
      const params = { msg, s };
      const queryString = Object.keys(params)
        .map((key) => {
          return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
        })
        .join("&");
      this.link = window.location.origin + "/valentine?" + queryString;
      // this.$router.push({ path: "/valentine", query: { msg, s } });
    },
    chooseMessage(msg) {
      this.message = msg;
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

.wrapper {
  display: block;
  height: 100%;
  width: 100%;
}

.page {
  padding: 60px 16px 16px;
}

.create-button {
  background: #c2185b;
}
</style>
