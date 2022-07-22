import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.scss";
import VueScrollTo from "vue-scrollto";

createApp(App).use(router).use(VueScrollTo).mount("#app");
