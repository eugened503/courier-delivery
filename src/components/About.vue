<template>
  <section class="about">
    <img class="about__bg-image" src="../assets/images/plus.svg" alt="plus" />
    <img class="about__bg-image" src="../assets/images/plus.svg" alt="plus" />
    <img class="about__bg-image" src="../assets/images/cloud.svg" alt="cloud" />
    <h2 class="about__title">
      Мой опыт — ваша гарантия <br />
      качественных услуг доставки
    </h2>
    <p class="about__desc">
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
      <div class="circle">
        <h3 class="circle__title">6 лет</h3>
        <p class="circle__desc">
          с 2016 работаю в сфере <br />
          курьерских доставок
        </p>
      </div>

      <div class="circle">
        <h3 class="circlecircle__title">4000+</h3>
        <p class="circle__desc">
          доставил минимум 4000 <br />
          разных посылок
        </p>
      </div>
      <div class="circle">
        <h3 class="circlecircle__title">12</h3>
        <p class="circle__desc">
          собрал команду из 12 <br />
          курьеров (пешие + авто)
        </p>
      </div>
      <div class="circle">
        <h3 class="circlecircle__title">2700+</h3>
        <p class="circle__desc">
          клиентов из YouDo оценили мою работу на 5 <br />
          по статистике за 3 года работы — с 2019 по 2021<br />
        </p>
        <img src="../assets/images/estimation.png" alt="estimation" />
        <a href="#" target="_blank">Посмотреть профиль</a>
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
}
</style>
