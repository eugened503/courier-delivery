<template>
  <div class="rules">
    <h2 class="rules__title">Полные правила</h2>
    <div class="rules__process">
      <img
        class="rules__img"
        src="../assets/images/courier.svg"
        alt="courier"
      />
      <p class="rules__desc">Процесс доставки</p>
    </div>
    <Cards :items="items" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "RulesView",
  components: {
    Cards,
  },
  data() {
    return {
      items: [
        {
          step: "1",
          title: "",
          desc: "<span>До 14:00</span> нужно сообщить нам о том, что Вам нужен курьер, пеший или на автомобиле",
        },
        {
          step: "2",
          title: "",
          desc: "Курьер заберёт <span>упакованные</span> посылки <br>	 в любой 3-часовой интервал в рамках <br>времени с <span>16:00</span> до <span>22:00 </span>",
        },
        {
          step: "3",
          title: "",
          desc: "До <span> 22:00</span> нужно передать нам информацию <br>о заказах одним из перечисленных способов Она должна содержать: <br> <br> <span>1. Адрес получателя</span> – улица, дом;<br> <br> <span>2. Время</span> - любой 3-часовой интервал в рамках времени с 8:00 до 22:00<br> <br> <span>	3. Телефон</span> получателя<br> <br> <span>4.  Информацию о получении оплаты с клиента</span> – оплачено, либо сумму, которую надо взять с клиента<br> <br> 5. Остальную информацию, такую как <span>подъезд, этаж, квартира, домофон, ориентир, ФИО, комментарий</span> к заказу, внутренний номер заказа и так далее можно предоставить по желанию. Она будет передана курьеру вместе с основными данными",
        },
        {
          step: "4",
          title: "",
          desc: "На следующий день мы <span>развозим </span>заказы в указанный 3-часовой интервал в рамках времени с <span>8:00</span> до <span>22:00</span>",
        },
        {
          step: "5",
          title: "",
          desc: "Перед выездом на адрес<span> курьер всегда звонит клиенту</span>. Если клиент не выходит на связь, мы действуем по плану, который согласуем с вами перед началом сотрудничества",
        },
        {
          step: "6",
          title: "",
          desc: "<span>Невостребованные товары </span>вернём бесплатно через день после доставки",
        },
        {
          step: "7",
          title: "",
          desc: "<span>Выручку и отчёт</span> переведём на Ваш расчётный счёт на следующий день после доставок",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.rules {
  .cards {
    display: block;
    width: 1170px;
    max-width: none;

    .card {
      width: 600px;
      margin: 0 auto 30px;

      &:first-child {
        margin: 0 auto 30px 0;
      }

      &:nth-child(2) {
        margin: 0 0 30px auto;
      }

      &:nth-child(3) {
        width: 640px;
      }

      &:nth-child(n + 4):nth-child(even) {
        margin: 0 auto 30px 0;
      }

      &:nth-child(n + 5):nth-child(odd) {
        margin: 0 0 30px auto;
      }

      &__step {
        float: left;
      }

      &__desc {
        margin: 0;
      }
    }
  }
}
</style>
