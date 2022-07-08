<template>
  <div class="home">
    <Header />
    <Banner />
    <!-- <Description />
    <Community />
    <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
//import Description from "@/components/Description.vue";
//import Community from "@/components/Community.vue";
//import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  //components: { Header, Banner, Description, Community, Footer },
  components: { Header, Banner },
};
</script>
