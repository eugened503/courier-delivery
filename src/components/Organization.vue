<template>
  <section class="organization" id="organization">
    <h2 class="title">Организация процессов без лишней бюрократии</h2>
    <h3 class="subtitle">Быстро. Удобно. Понятно</h3>
    <Cards :items="items" />
    <router-link class="organization__link" to="/rules/">Подробнее</router-link>
  </section>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "OrganizationBlock",
  components: {
    Cards,
  },
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
