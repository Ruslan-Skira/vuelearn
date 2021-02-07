import NavLinks from "./components/NavLinks.vue";
import HeartCard from "./components/HeartCard.vue";

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
