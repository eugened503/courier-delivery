<template>
  <section class="organization">
    <h2 class="title">Организация процессов без лишней бюрократии</h2>
    <h3 class="subtitle">Быстро. Удобно. Понятно</h3>
    <div class="card-wrapper">
      <img
        class="card-wrapper__image"
        src="../assets/images/il.svg"
        alt="image-left"
      />
      <div class="cards">
        <article class="card" v-for="(item, index) in items" :key="index">
          <div class="card__step">
            <div class="card__circle">
              {{ item.step }}
            </div>
            <h4 class="card__title" v-html="item.title" />
          </div>
          <p class="card__desc" v-html="item.desc" />
        </article>
      </div>
      <img
        class="card-wrapper__image"
        src="../assets/images/ir.svg"
        alt="image-right"
      />
    </div>
    <a class="organization__link" href="/rules/">Подробнее</a>
  </section>
</template>

<script>
export default {
  name: "OrganizationView",
  data() {
    return {
      items: [
        {
          step: "1",
          title: "Отправьте нам запрос <br /> на доставку товаров",
          desc: "Сообщите нам, что вы хотите заказать услуги курьерской доставки, чтобы наш курьер забрал ваши посылки вечером в тот же день. <br /> <br>Связаться с нами вы можете любым удобным способом: позвонить, написать в мессенджер, отправить e-mail.",
        },
        {
          step: "2",
          title: "Подготовьте посылки <br /> и передайте курьеру",
          desc: "Подготовьте ваши посылки до приезда курьера.<br /> <br /> Заказы должны быть упакованы в герметичный пакет или коробку. <br /> <br /> Курьер приедет за посылкой в удобный 3-часовой  интервал в рамках времени с<span> 16:00</span> до <span>22:00</span>.",
        },
        {
          step: "3",
          title: "На следующий день развезем <br /> посылки в указанное время",
          desc: "Мы развозим заказы в указанный 3-часовой интервал в рамках времени с <span> 8:00 </span> до <span> 22:00</span>. <br /> <br /> Перед выездом на адрес курьер всегда звонит клиенту. ",
        },
        {
          step: "4",
          title: "Получите от нас выручку <br /> с доставок и отчет",
          desc: "На следующий день после доставки заказов мы <br /> отправим вам подробный отчёт. <a href='https://dostaver.ru/wp-content/uploads/2022/04/1.3.pdf' target='_blank'>Пример отчета</a>",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.organization {
  margin: 130px 0 0;

  @media screen and (max-width: $tablet) {
    margin: 38px 0 0;
  }

  .card-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 63px 0 0;
    padding: 0 31px;

    &__image {
      position: absolute;
      z-index: 1;

      @media screen and (max-width: $laptop-big) {
        display: none;
      }

      &:first-child {
        top: 126px;
        left: 0;
      }

      &:last-child {
        top: 52px;
        right: 0;
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 1170px;
      margin: 0 auto;
      z-index: 2;

      @media screen and (max-width: $laptop-big) {
        max-width: auto;
      }
    }
  }

  .card {
    background: $color-white;
    border-radius: 38px;
    width: 570px;
    margin: 0 0 30px;
    padding: 50px 50px 43px;

    &:last-child {
      @media screen and (max-width: $laptop-big) {
        margin: 0;
      }
    }

    @media screen and (max-width: $laptop-big) {
      width: 100%;
    }

    @media screen and (max-width: $laptop-big) {
      margin: 0 0 20px;
      padding: 29px 20px 30px;
    }

    &__step {
      display: flex;

      @media screen and (max-width: $tablet) {
        display: block;
      }
    }

    &__circle {
      display: flex;
      align-items: center;
      flex: 0 0 57px;
      margin: 0 29px 0 0;
      width: 57px;
      height: 57px;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: $color-white;
      background: $color-purple;
      justify-content: center;
      border-radius: 50%;

      @media screen and (max-width: $tablet) {
        margin: 0 auto;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      color: $color-purple;

      @media screen and (max-width: $tablet) {
        margin: 21px 0 0;
      }
    }

    &__desc {
      margin: 30px 0 0;
      font-size: 18px;
      line-height: 28px;
      color: $color-purple;

      span {
        font-weight: 700;
        color: inherit;
      }
    }

    a {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      border-bottom: 1px dashed #4c0085;
      color: inherit;
      padding-bottom: 5px;
    }
  }

  &__link {
    display: block;
    margin: 21px auto 0;
    max-width: 88px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $color-white;
    border-bottom: 1px dashed #fff;
    padding-bottom: 5px;

    @media screen and (max-width: $tablet) {
      margin: 22px auto 0;
    }
  }
}
</style>
