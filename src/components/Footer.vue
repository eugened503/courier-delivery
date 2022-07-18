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
          <a href="/rules/" class="footer-links__link"
            >Политика конфиденциальности</a
          >
        </li>
        <li class="footer-links__item">
          <a href="/privacy-policy/" class="footer-links__link">
            Полные правила
          </a>
        </li>
      </ul>
    </div>
    <Contacts />
  </footer>
</template>

<script>
import Contacts from "@/components/Contacts.vue";
export default {
  name: "FooterView",
  components: { Contacts },
};
</script>

<style lang="scss">
.footer {
}
</style>
