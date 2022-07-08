<template>
  <section class="banner">
    <div class="banner__info">
      <h1 class="banner__title">Курьерская доставка</h1>
      <h2 class="banner__subtitle">
        для интернет-магазинов в пределах Москвы и МО
      </h2>
      <div class="label">
        <div class="label__circle">97%<span>заказов</span></div>
        <div class="label__desc">
          доставили<span>вовремя</span>в апреле 2022
        </div>
      </div>
      <p class="banner__text">
        Обеспечим вашему бизнесу доставку точно в срок и с удобной возможностью
        оплаты заказов для вас и ваших клиентов
      </p>
      <div class="form">
        <div class="form__input-wrapper">
          <input
            type="text"
            class="input-form__input"
            placeholder="Введите номер телефона"
          />

          <button type="submit" class="input-form__button">
            ПЕРЕЗВОНИТЕ МНЕ
          </button>
        </div>
        <label class="form__checkbox-wrapper">
          <input type="checkbox" class="form__checkbox" checked="checked" />
          <span class="form__policy">
            Я согласен с
            <a href="/privacy-policy/">политикой конфиденциальности </a>
          </span>
        </label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerView",
};
</script>

<style lang="scss">
.banner {
  min-height: 761px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url("../assets/images/bg.svg");

  &__subtitle {
    position: relative;
    &::before {
      content: "";
      background: url("../assets/images/ellipse.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 415px;
      height: 65px;
      position: absolute;
      //left: 160px;
      //top: 0;
    }
  }
}
</style>
