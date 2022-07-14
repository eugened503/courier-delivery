<template>
  <section class="organization">
    <h2 class="organization__title">
      Организация процессов без лишней бюрократии
    </h2>
    <h3 class="organization__subtitle">Быстро. Удобно. Понятно</h3>
    <div class="card-wrapper">
      <img src="../assets/images/il.svg" alt="image-left" />
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
      <img src="../assets/images/ir.svg" alt="image-right" />
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
}
</style>
