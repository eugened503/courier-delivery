<template>
  <section class="banner">
    <div class="banner__info">
      <div class="banner__info-wrapper">
        <h1 class="banner__title">Курьерская доставка</h1>
        <span class="banner__subtitle">
          для интернет-магазинов в пределах Москвы и МО
        </span>
        <p class="banner__text">
          Обеспечим вашему бизнесу доставку точно в срок и с удобной
          возможностью оплаты заказов для вас и ваших клиентов
        </p>
        <Form />
        <div class="label">
          <div class="label__circle">
            97%
            <p class="label__text">заказов</p>
          </div>
          <div class="label__desc">
            доставили<span> вовремя </span> <br />в апреле 2022
          </div>
        </div>
      </div>
      <img
        class="banner__bg-mobile"
        src="../assets/images/bg-mobile.svg"
        alt="bg-mobile"
      />
    </div>
  </section>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "BannerView",
  components: { Form },
};
</script>

<style lang="scss">
.banner {
  display: flex;
  justify-content: center;
  min-height: 761px;
  margin: 66px 0 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/images/bg.svg");

  @media screen and (max-width: $laptop-small) {
    background-image: none;
  }

  &__info {
    width: 100%;
    text-align: center;
  }

  &__info-wrapper {
    max-width: 1187px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;

    .label {
      position: absolute;
      left: 87px;
      top: 173px;
      transform: rotate(-21.24deg);

      @media screen and (max-width: $laptop-middle) {
        left: 56px;
      }

      @media screen and (max-width: $laptop-small) {
        position: static;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 24px auto 0;
        transform: none;
      }

      &__circle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: $color-white;
        width: 128px;
        height: 128px;
        font-size: 36px;
        text-align: center;
        color: $color-purple;
        border-radius: 50%;
      }

      &__text {
        color: inherit;
        font-size: 18px;
        text-align: center;
      }

      &__desc {
        margin: 9px 0 0;
        font-size: 14px;
        line-height: 17px;
        text-align: center;

        span {
          font-weight: 600;
        }
      }
    }
  }

  &__title {
    margin: 0 auto;
    font-family: "MuseoSansCyrl-500";
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    line-height: 66px;

    @media screen and (max-width: $laptop-big) {
      font-size: 64px;
      line-height: 62px;
    }

    @media screen and (max-width: $laptop-small) {
      font-size: 48px;
      line-height: 48px;
    }
  }

  &__subtitle {
    position: relative;
    margin: 0 auto;
    font-family: "MuseoSansCyrl-500";
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 58px;

    @media screen and (max-width: $laptop-big) {
      font-size: 32px;
    }

    @media screen and (max-width: $laptop-small) {
      max-width: 295px;
      font-size: 24px;
      line-height: 40px;
    }

    &::before {
      content: "";
      background: url("../assets/images/ellipse.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 415px;
      height: 65px;
      position: absolute;
      left: 74px;

      @media screen and (max-width: $laptop-big) {
        left: 54px;
      }

      @media screen and (max-width: $laptop-small) {
        width: 287px;
        height: 37px;
        left: 25px;
      }
    }
  }

  &__text {
    margin: 25px auto 0;
    max-width: 759px;
    font-size: 20px;
    line-height: 32px;

    @media screen and (max-width: $laptop-small) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__bg-mobile {
    display: none;
    @media screen and (max-width: $laptop-small) {
      display: block;
      margin: -123px 0 0 auto;
    }
  }
}
</style>
