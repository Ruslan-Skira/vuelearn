import NavLinks from "./components/NavLinks.vue";
import HeartCard from "./components/HeartCard.vue";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: NavLinks,
  },
  {
    path: "/valentine",
    component: HeartCard,
  },
];

export default new VueRouter({ routes, mode: "history" });
