<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="scss">
#app {
  background: $color-purple;
}

.main {
  background: $color-purple;
  color: $color-white;
  max-width: 1920px;
  min-width: 360px;
  min-height: 100vh;
  margin: 0 auto;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
