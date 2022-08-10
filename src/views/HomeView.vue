<template>
  <div class="home">
    <Banner />
    <Price />
    <Organization />
    <Money />
    <Status />
    <About />
    <Application />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Price from "@/components/Price.vue";
import Organization from "@/components/Organization.vue";
import Money from "@/components/Money.vue";
import Status from "@/components/Status.vue";
import About from "@/components/About.vue";
import Application from "@/components/Application.vue";

export default {
  name: "HomeView",
  components: {
    Banner,
    Price,
    Organization,
    Money,
    Status,
    About,
    Application,
  },
};
</script>
