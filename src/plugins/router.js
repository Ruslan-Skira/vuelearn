import Vue from "vue";
import VueRouter from "vue-router";
import NavLinks from "../components/NavLinks.vue";
import HeartCard from "../views/ValentinesPage.vue";
import BirthdayPage from "../views/BirthdayPage.vue";

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
  {
    path: "/birthday",
    component: BirthdayPage,
  },
];

export default new VueRouter({ routes, mode: "history" });
