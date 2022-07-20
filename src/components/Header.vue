<template>
  <header class="header">
    <Menu class="menu-desktop" />
    <Menu
      class="dropdown"
      :class="{ 'dropdown-after': menuOpen }"
      @menu-close="toggleMenu"
    />
    <div class="header__logo">
      <a href="/" class="header__logo-link">
        <img src="../assets/images/logo.svg" alt="logo" />
      </a>
      <button class="header__burger-btn" type="button" @click="toggleMenu">
        <img src="../assets/images/burger-img.svg" alt="burger-btn" />
      </button>
    </div>
    <Contacts class="header-contacts" />
  </header>
</template>

<script>
import Contacts from "@/components/Contacts.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "HeaderView",
  components: { Contacts, Menu },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },

  watch: {
    menuOpen() {
      if (this.menuOpen) {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (max-width: $laptop-big) {
    width: 900px;
  }

  @media screen and (max-width: $laptop-small) {
    width: 600px;
  }

  @media screen and (max-width: $tablet) {
    display: block;
    width: 100%;
    padding: 0 15px;
  }

  @media screen and (max-width: $mobile-middle) {
    padding: 0 29px;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 122.68px;
    background: $color-white;
    border-radius: 0px 0px 43px 43px;

    @media screen and (max-width: $tablet) {
      width: 100%;
      padding: 0 20px;
      justify-content: space-between;
    }

    @media screen and (max-width: $mobile-middle) {
      padding: 0 33px;
      height: 70px;
    }
  }

  &__logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-desktop {
    @media screen and (max-width: $laptop-small) {
      display: none;
    }
  }

  &__burger-btn {
    display: none;
    @media screen and (max-width: $laptop-small) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 20px;
    }
  }

  .header-contacts {
    margin: 18px 0 0;
  }

  .dropdown {
    display: none;
    @media screen and (max-width: $laptop-small) {
      position: fixed;
      z-index: 3;
      top: -266px;
      left: 0;
      right: 0;
      transition: transform 0.5s ease;
      display: block;
      padding: 40px 40px 0 54px;
      background: rgba(76, 0, 133, 0.97);
    }
    .menu {
      //margin: 0 0 0 54px;
      font-size: 24px;
      line-height: 64px;
      @media screen and (max-width: $laptop-small) {
        display: block;
      }

      &__item {
        margin: 0;
      }
    }
  }

  .dropdown-after {
    transform: translate(0, 266px);
    height: 100vh;
    .close-btn {
      display: block;
      //margin: 40px 40px 0 auto;
      margin: 0 0 0 auto;
    }
  }
}
</style>
