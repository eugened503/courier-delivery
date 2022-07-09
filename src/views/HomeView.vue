<template>
  <div class="home">
    <Header />
    <Banner />
    <Price />
    <!-- <Community />
    <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Price from "@/components/Price.vue";
//import Community from "@/components/Community.vue";
//import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  //components: { Header, Banner, Description, Community, Footer },
  components: { Header, Banner, Price },
};
</script>
