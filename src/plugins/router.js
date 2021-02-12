import Vue from "vue";
import VueRouter from "vue-router";
import NavLinks from "../components/NavLinks.vue";
import BirthdayPage from "../views/BirthdayPage.vue";
import ValentinesPage from "../views/ValentinesPage.vue";
import CreateValentinePage from "../views/CreateValentinePage.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: NavLinks,
  },
  {
    path: "/valentine",
    component: ValentinesPage,
  },
  {
    path: "/valentine/:id",
    component: ValentinesPage,
  },
  {
    path: "/create-valentine",
    component: CreateValentinePage,
  },
  {
    path: "/birthday",
    component: BirthdayPage,
  },
];

export default new VueRouter({ routes, mode: "history" });
