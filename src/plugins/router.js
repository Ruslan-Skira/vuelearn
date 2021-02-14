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
    meta: { title: "Valentine" },
  },
  {
    path: "/valentine/:id",
    component: ValentinesPage,
    meta: { title: "Valentine" },
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

const router = new VueRouter({ routes, mode: "history" });

const DEFAULT_TITLE = "Gift Card";
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
