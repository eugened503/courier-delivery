<template>
  <header class="header">
    <nav>
      <ul class="header-menu">
        <li class="header-menu__item">Правила</li>
        <li class="header-menu__item">Тарифы</li>
        <li class="header-menu__item">Контакты</li>
      </ul>
    </nav>

    <a href="/" class="header__logo-link">
      <img src="../assets/images/logo.svg" alt="logo" />
    </a>

    <div class="contacts">
      <div class="contacts__connection">
        <a href="tel:+7 499 408 47 70">+7 499 408 47 70</a>
        <span class="header__connection-item">ежедневно с 08:00 до 20:00</span>
      </div>
      <div class="contacts__messengers">
        <ul class="contacts__list">
          <li class="contacts__list-item">
            <a href="https://wa.me/74994084770" target="_blank">
              <img src="../assets/images/wa.svg" alt="wa-logo" />
            </a>
          </li>
          <li class="contacts__list-item">
            <a href="https://t.me/dostaver" target="_blank">
              <img src="../assets/images/tg.svg" alt="tg-logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style lang="scss">
.header {
}
</style>
