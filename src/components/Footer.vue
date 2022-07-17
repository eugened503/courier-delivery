<template>
  <footer class="footer">
    <a class="footer__logo" href="/">
      <img src="../assets/images/f-logo.svg" alt="logo" />
    </a>
    <div class="tax-report">
      <span class="tax-report__text">ИП Каткаев Владислав Наранович</span>
      <span class="tax-report__text">ИНН 372003215258</span>
    </div>
    <div class="footer-links">
      <ul class="footer-links__list">
        <li class="footer-links__item">
          <a href="/rules/" class="footer-links__link">Полные правила</a>
        </li>
        <li class="footer-links__item">
          <a href="/privacy-policy/" class="footer-links__link">
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </div>

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
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style lang="scss">
.footer {
}
</style>
