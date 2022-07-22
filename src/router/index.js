import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RulesView from "../views/RulesView.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/rules",
    name: "rules",
    component: RulesView,
  },

  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
