<template>
  <footer class="footer">
    <div class="copyright">
      <p class="copyright__title">Authortie</p>
      <p class="copyright__subtitle">&#169; <span>Все права защищены</span></p>
    </div>
    <ul class="footer-menu">
      <li class="footer-menu__item">Политика конфиденциальности</li>
      <li class="footer-menu__item">Аналитика</li>
      <li class="footer-menu__item">Сообщество</li>
      <li class="footer-menu__item">Для организаций</li>
    </ul>
    <div class="social-networks">
      <ul class="social-networks__list">
        <li class="social-networks__item">
          <img
            class="social-networks__image"
            src="../assets/images/facebook.svg"
            alt="key-image"
          />
        </li>
        <li class="social-networks__item">
          <img
            class="social-networks__image"
            src="../assets/images/instagram.svg"
            alt="key-image"
          />
        </li>
        <li class="social-networks__item">
          <img
            class="social-networks__image"
            src="../assets/images/telegram.svg"
            alt="key-image"
          />
        </li>
      </ul>
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
  margin: 97px 0 0;
  padding: 41px 162px 23px;
  display: flex;
  background: #262628;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: $color-white;

  @media screen and (max-width: 1414px) {
    flex-direction: column;
    align-items: center;
    margin: 76px 0 0;
    padding: 22px percentage(130/1365) 16px;
  }

  @media screen and (max-width: $laptop-small - 1px) {
    padding: 22px percentage(44/768) 16px;
  }

  @media screen and (max-width: $tablet - 1px) {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "social menu"
      "copyright menu";
    font-size: 12px;
    line-height: 14px;
    margin: 60px 0 0;
    padding: 22px percentage(51/480);
  }

  .copyright {
    @media screen and (max-width: 1414px) {
      text-align: center;
      order: 1;
      margin: 19px 0 0;
    }

    @media screen and (max-width: $tablet - 1px) {
      grid-area: copyright;
      order: inherit;
      text-align: left;
      margin: auto 39px 0 0;
    }

    &__subtitle {
      color: #888888;
    }
  }

  .footer-menu {
    display: flex;
    margin: 0 0 0 67px;

    @media screen and (max-width: 1524px) {
      margin: 0 0 0 45px;
    }

    @media screen and (max-width: 1414px) {
      width: 100%;
      justify-content: space-between;
      margin: 0;
      padding: 0 0 19px;
      border-bottom: 1px solid #343434;
    }

    @media screen and (max-width: $tablet - 1px) {
      grid-area: menu;
      width: auto;
      padding: 0;
      margin: 0 0 0 auto;
      display: block;
      border: none;
    }

    &__item {
      margin: 0 67px 0 0;
      cursor: pointer;

      &:hover {
        color: $color-blue;
      }

      @media screen and (max-width: 1524px) {
        margin: 0 45px 0 0;
      }

      @media screen and (max-width: 1414px) {
        margin: 0;
      }

      @media screen and (max-width: $tablet - 1px) {
        margin: 10px 0 0;
      }

      &:first-child {
        @media screen and (max-width: $tablet - 1px) {
          margin: 0;
        }
      }
    }
  }

  .social-networks {
    margin: 0 0 0 auto;

    @media screen and (max-width: 1414px) {
      margin: 15px 0 0;
      order: 3;
    }

    @media screen and (max-width: $tablet - 1px) {
      order: inherit;
      grid-area: social;
      margin: 0 39px 0 0;
    }

    &__list {
      display: flex;
    }

    &__item {
      margin: 0 29px 0 0;
      cursor: pointer;

      @media screen and (max-width: $tablet - 1px) {
        margin: 0 17px 0 0;
      }

      &:last-child {
        margin: 0;
      }
    }

    &__image {
      @media screen and (max-width: $tablet - 1px) {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>
