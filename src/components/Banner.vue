<template>
  <section class="banner">
    <div class="banner__info">
      <h1 class="banner__info-title">
        Сообщество взаимопомощи между учёными со всего мира
      </h1>
      <p class="banner__text">
        Удобный сервис, который подберёт для вас коллег и поможет наладить с
        ними взаимовыгодное сотрудничество в областях совместных исследований,
        соавторства, рецензирования и повышения индекса цитирования.
      </p>
      <p class="banner__mobile-text">
        Аналитика, соавторство, рецензирование и продвижение научных работ.
      </p>
      <button class="banner__button">Присоединиться</button>
    </div>
    <img
      src="../assets/images/scientists.png"
      alt="scientists"
      class="banner__image"
    />
    <img
      src="../assets/images/tablet-img.png"
      alt="scientists"
      class="banner__tablet-image"
    />
    <img
      src="../assets/images/mobile-img.png"
      alt="scientists"
      class="banner__mobile-image"
    />
  </section>
</template>

<script>
export default {
  name: "BannerView",
};
</script>

<style lang="scss">
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 68px 174px 55px 162px;
  background: url(../assets/images/banner-bg.jpg);

  @media screen and (max-width: $laptop-big) {
    padding: 78px 159px 55px;
  }

  @media screen and (max-width: $laptop-small) {
    padding: 71px 25px 65px 127px;
    background: url(../assets/images/bg-1024.jpg);
  }

  @media screen and (max-width: $tablet) {
    padding: 14px 14px 35px 45px;
    background: url(../assets/images/bg-768.jpg);
  }

  @media screen and (max-width: $mobile-big) {
    position: relative;
    padding: 45px 66px 93px 50px;
    background: url(../assets/images/mobile-bg.jpg);
  }

  @media screen and (max-width: $mobile-big - 1px) {
    padding: 31px 45px 145px 16px;
  }

  &__info-title {
    margin: 0;
    max-width: 77%;
    font-weight: 700;
    font-size: 50px;
    line-height: 52.75px;
    color: $color-black;

    @media screen and (max-width: $laptop-big) {
      max-width: 87%;
      font-size: 36px;
      line-height: 38px;
    }

    @media screen and (max-width: $laptop-small) {
      font-size: 30px;
      line-height: 31.65px;
    }

    @media screen and (max-width: $tablet) {
      max-width: 95%;
      font-size: 28px;
      line-height: 30px;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      font-size: 24px;
      line-height: 25px;
    }
  }

  &__text {
    max-width: 77%;
    margin: 33px 0 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: $color-black;

    @media screen and (max-width: $laptop-big) {
      margin: 24px 0 0;
      max-width: 98%;
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (max-width: $laptop-small) {
      display: none;
    }
  }

  &__mobile-text {
    display: none;

    @media screen and (max-width: $laptop-small) {
      display: block;
      font-weight: 400;
      color: $color-black;
      margin: 28px 0 0;
      font-size: 14px;
      line-height: 17px;
    }

    @media screen and (max-width: $tablet) {
      margin: 22px 0 0;
    }

    @media screen and (max-width: $mobile-big) {
      margin: 26px 0 0;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      margin: 15px 0 0;
    }
  }

  &__button {
    margin: 33px 0 0;
    padding: 15px 43px;
    background: $color-blue;
    border-radius: 123px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $color-white;
    border: 1px solid transparent;

    &:hover {
      background: $color-white;
      color: $color-blue;
      border: 1px solid $color-blue;
    }

    @media screen and (max-width: $laptop-big) {
      margin: 24px 0 0;
      font-size: 14px;
      line-height: 16px;
      padding: 14px 43px 12px;
    }

    @media screen and (max-width: $laptop-small) {
      margin: 28px 0 0;
      font-size: 13px;
      line-height: 15px;
      padding: 14px 31px 13px;
    }

    @media screen and (max-width: $tablet) {
      margin: 22px 0 0;
    }

    @media screen and (max-width: $mobile-big) {
      margin: 26px 0 0;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      margin: 15px 0 0;
    }
  }

  &__image {
    max-width: 50%;

    @media screen and (max-width: $laptop-big) {
      max-width: 53.15%;
    }
    @media screen and (max-width: $laptop-small) {
      max-width: 52.6%;
    }

    @media screen and (max-width: $tablet) {
      display: none;
    }
  }

  &__tablet-image {
    display: none;

    @media screen and (max-width: $tablet) {
      display: block;
      max-width: percentage(360/709);
    }

    @media screen and (max-width: $mobile-big) {
      display: none;
    }
  }

  &__mobile-image {
    display: none;

    @media screen and (max-width: $mobile-big) {
      display: block;
      position: absolute;
      bottom: 0;
      right: 3px;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      max-width: 205px;
    }
  }
}
</style>
