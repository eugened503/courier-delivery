<template>
  <nav>
    <button class="close-btn" type="button" @click="menuClose">
      <img src="../assets/images/close-btn.svg" alt="burger-btn" />
    </button>
    <ul class="menu">
      <li class="menu__item">
        <router-link class="menu__link" to="/rules">Правила</router-link>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="/#price">Тарифы</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="/#application">Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuBlock",
  methods: {
    menuClose() {
      this.$emit("menu-close");
    },
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;

  &__item {
    margin: 0 64px 0 0;
    @media screen and (max-width: $laptop-big) {
      margin: 0 30px 0 0;
    }
  }
}

.close-btn {
  display: none;
}
</style>
