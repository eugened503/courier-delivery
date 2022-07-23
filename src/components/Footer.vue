<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <router-link class="footer__logo" to="/">
        <img src="../assets/images/f-logo.svg" alt="logo" />
      </router-link>
      <div class="tax-report">
        <span class="tax-report__text">ИП Каткаев Владислав Наранович</span>
        <span class="tax-report__text">ИНН 372003215258</span>
      </div>
      <ul class="footer-links">
        <li class="footer-links__item">
          <router-link to="/privacy-policy" class="footer-links__link">
            Политика конфиденциальности
          </router-link>
        </li>
        <li class="footer-links__item">
          <router-link to="/rules" class="footer-links__link">
            Полные правила
          </router-link>
        </li>
      </ul>
      <Contacts />
    </div>
  </footer>
</template>

<script>
import Contacts from "@/components/Contacts.vue";
export default {
  name: "FooterBlock",
  components: { Contacts },
};
</script>

<style lang="scss">
.footer {
  min-width: 360px;
  background: $color-white;
  padding: 48px 0 56px 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1173px;
    margin: 0 auto;

    @media screen and (max-width: $laptop-big) {
      max-width: 900px;
    }

    @media screen and (max-width: $laptop-small) {
      max-width: 600px;
      flex-direction: column;
    }

    .tax-report {
      font-size: 15px;
      line-height: 24px;
      opacity: 0.45;

      @media screen and (max-width: $laptop-small) {
        text-align: center;
      }

      &__text {
        display: block;
        color: $color-dark-purple;
      }
    }

    .footer-links {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;

      @media screen and (max-width: $laptop-small) {
        margin: 30px 0 0;
      }

      @media screen and (max-width: $laptop-small) {
        text-align: center;
        order: 4;
      }

      &__link {
        border-bottom: 1px dashed $color-dark-purple;
        color: $color-dark-purple;
        padding-bottom: 5px;
      }
    }

    .contacts {
      @media screen and (max-width: $laptop-big) {
        margin: 20px 0 0;
      }
      &__link {
        color: $color-dark-purple;
      }

      &__connection-item {
        color: $color-dark-purple;
      }
    }
  }
}
</style>
