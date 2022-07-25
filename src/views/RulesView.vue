<template>
  <div class="rules">
    <h2 class="rules__title">Полные правила</h2>
    <img class="rules__img" src="../assets/images/courier.svg" alt="" />
    <p class="rules__desc">Процесс доставки</p>
    <Cards :items="items" />
    <Pack />
    <InformationTransfer />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Pack from "@/components/Pack.vue";
import InformationTransfer from "@/components/InformationTransfer.vue";
export default {
  name: "RulesView",
  components: {
    Cards,
    Pack,
    InformationTransfer,
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
  margin: 93px 0 0;

  @media screen and (max-width: $laptop-small) {
    margin: 36px 0 0;
  }

  &__title {
    font-family: "MuseoSansCyrl-500";
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 66px;
    text-align: center;
    font-size: 46px;
    line-height: 66px;

    @media screen and (max-width: $laptop-small) {
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
    }
  }

  &__img {
    display: block;
    margin: 62px auto 0;

    @media screen and (max-width: $laptop-small) {
      margin: 30px auto 0;
    }
  }

  &__desc {
    margin: 18px 0 0;
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    @media screen and (max-width: $laptop-small) {
      margin: 13px 0 0;
    }
  }

  .card-wrapper {
    &__image {
      &:first-child {
        top: auto;
        bottom: 416px;
        left: 0;
      }

      &:last-child {
        top: auto;
        bottom: 416px;
        right: 0;
      }
    }
  }

  .cards {
    display: block;
    width: 1170px;
    max-width: none;

    @media screen and (max-width: $laptop-small) {
      width: 600px;
    }

    @media screen and (max-width: $tablet) {
      width: 100%;
    }

    .card {
      width: 600px;
      margin: 0 auto 30px;

      @media screen and (max-width: $laptop-small) {
        width: 100%;
      }

      &:first-child {
        margin: 0 auto 30px 0;

        @media screen and (max-width: $laptop-small) {
          margin: 0 auto 20px;
        }
      }

      &:nth-child(2) {
        margin: 0 0 30px auto;

        @media screen and (max-width: $laptop-small) {
          margin: 0 auto 20px;
        }
      }

      &:nth-child(3) {
        width: 640px;

        @media screen and (max-width: $laptop-small) {
          width: 100%;
          margin: 0 auto 20px;
        }
      }

      &:nth-child(n + 4):nth-child(even) {
        margin: 0 auto 30px 0;

        @media screen and (max-width: $laptop-small) {
          margin: 0 auto 20px;
        }
      }

      &:nth-child(n + 5):nth-child(odd) {
        margin: 0 0 30px auto;

        @media screen and (max-width: $laptop-small) {
          margin: 0 auto 20px;
        }
      }

      &__step {
        float: left;

        @media screen and (max-width: $tablet) {
          float: none;
        }
      }

      &__desc {
        margin: 0;

        @media screen and (max-width: $tablet) {
          margin: 18px 0 0;
        }
      }
    }
  }
}
</style>
