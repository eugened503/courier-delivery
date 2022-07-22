<template>
  <section class="about">
    <img class="about__bg-image" src="../assets/images/plus.svg" alt="plus" />
    <img class="about__bg-image" src="../assets/images/plus.svg" alt="plus" />
    <img class="about__bg-image" src="../assets/images/cloud.svg" alt="cloud" />
    <h2 class="title">
      Мой опыт — ваша гарантия <br />
      качественных услуг доставки
    </h2>
    <p class="subtitle">
      Будем знакомы — <span>Владислав Каткаев</span>, основатель курьерской
      <br />
      службы Dostaver, лично контролирую работу курьеров.
    </p>
    <div class="about-info">
      <img
        class="about-info__avatar"
        src="../assets/images/ava.png"
        alt="avatar"
      />
      <div class="circle child-1">
        <h3 class="circle__title">6 лет</h3>
        <p class="circle__desc">
          с 2016 работаю в сфере <br />
          курьерских доставок
        </p>
      </div>

      <div class="circle child-2">
        <h3 class="circle__title">4000+</h3>
        <p class="circle__desc">
          доставил минимум 4000 <br />
          разных посылок
        </p>
      </div>
      <div class="circle child-3">
        <h3 class="circle__title">12</h3>
        <p class="circle__desc">
          собрал команду из 12 <br />
          курьеров (пешие + авто)
        </p>
      </div>
      <div class="circle child-4">
        <h3 class="circle__title">2700+</h3>
        <p class="circle__desc desc-margin">
          клиентов из YouDo оценили мою работу на 5 <br />
          по статистике за 3 года работы — с 2019 по 2021<br />
        </p>
        <img
          class="circle__image"
          src="../assets/images/estimation.png"
          alt="estimation"
        />
        <a class="circle__link" href="#" target="_blank">Посмотреть профиль</a>
      </div>

      <img class="about-info__car" src="../assets/images/car.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "StatusView",
};
</script>

<style lang="scss">
.about {
  position: relative;
  margin: 118px auto 0;
  max-width: 1173px;

  @media screen and (max-width: $tablet) {
    margin: 35px auto 0;
  }

  &__bg-image {
    position: absolute;

    @media screen and (max-width: $laptop-big) {
      display: none;
    }

    &:nth-child(1) {
      top: 298px;
      right: 393px;
    }

    &:nth-child(2) {
      top: 656px;
      left: -143px;
    }

    &:nth-child(3) {
      top: 656px;
      right: -19px;
    }
  }

  .about-info {
    position: relative;
    min-height: 1022px;
    margin: 42px 0 0;
    overflow: hidden;

    @media screen and (max-width: $laptop-big) {
      margin: 28px 0 0;
    }

    &__avatar {
      display: block;
      position: absolute;
      top: 33px;
      right: 0;
      left: 0;
      margin: 0 auto;
      border-radius: 50%;

      @media screen and (max-width: $laptop-big) {
        position: static;
        width: 292px;
        height: 292px;
      }
    }

    .circle {
      position: absolute;
      border-radius: 50%;
      width: 292px;
      height: 292px;
      background: $color-white;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      @media screen and (max-width: $laptop-big) {
        position: static;
        margin: 20px auto 0;
      }

      &__title {
        font-weight: 600;
        font-size: 40px;
        line-height: 24px;
        color: $color-dark-purple;
      }

      &__desc {
        margin: 27px 0 0;
        font-size: 18px;
        line-height: 28px;
        color: $color-dark-purple;
      }

      .desc-margin {
        margin: 27px 30px 0;
      }

      &__image {
        display: block;
        margin: 26px auto 0;
        width: 300px;
      }

      &__link {
        display: block;
        margin: 20px auto 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        border-bottom: 1px dashed $color-dark-purple;
        color: $color-dark-purple;
        padding-bottom: 5px;
      }
    }

    .child-1 {
      top: 0;
      left: 0;
    }

    .child-2 {
      top: 0;
      right: 0;
    }

    .child-3 {
      top: 443px;
      left: 178px;
    }

    .child-4 {
      right: 36px;
      bottom: 0;
      width: 538px;
      height: 538px;

      @media screen and (max-width: $laptop-big) {
        background: none;
        width: 100%;
        position: relative;
        top: auto;
        left: auto;
        right: auto;
        bottom: auto;
        z-index: 1;
      }

      &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 538px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        z-index: -1;
        background: #fff;
        transform: translate(-50%, -50%);
      }
    }

    &__car {
      position: absolute;
      left: -150px;
      bottom: 0;

      @media screen and (max-width: $laptop-big) {
        display: none;
      }
    }
  }
}
</style>
