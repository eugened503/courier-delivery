<template>
  <section class="money">
    <div class="money__info-wrapper">
      <h2 class="title">Работая с нами, вы на 100 % соблюдаете 54-ФЗ</h2>
      <p class="subtitle">
        Курьеры Dostaver не ограничены лишь наличным методом приёма выручки.
        <br />
        <br />
        Каждый курьер имеет при себе мобильный <span>терминал aQsi 5</span> со
        встроенным эквайрингом.<br />
        <br />
        Ваши клиенты могут по факту оплачивать заказ картой <br />
        и получать бумажный кассовый чек.
      </p>
      <Form text="ОБСУДИТЬ СОТРУДНИЧЕСТВО" />
      <img
        class="money__image"
        src="../assets/images/terminal.svg"
        alt="terminal"
      />
    </div>
    <div class="important-wrapper">
      <div class="important-information">
        <h2 class="title">Важная информация</h2>
        <div class="important-cards">
          <div
            class="important-card"
            v-for="(item, index) in items"
            :key="index"
          >
            <img
              class="important-card__image"
              src="../assets/images/i.svg"
              alt=""
            />
            <p class="important-card__desc" v-html="item.desc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "MoneyBlock",
  components: { Form },
  data() {
    return {
      items: [
        {
          desc: "на каждом чеке <span>в графе «продавец» будет <br /> напечатано название вашего юр. лица</span>, в том <br> числе и на цифровых чеках в онлайн ОФД",
        },
        {
          desc: "<span>на следующий день</span> после доставок мы <span>переводим</span> на ваш расчётный счёт всю выручку: наличные оплаты и оплаты по терминалу",
        },
        {
          desc: "стоимость кассового обслуживания <br /> <span class='bold'>0,7% от суммы чека</span>",
        },
        {
          desc: "стоимость эквайринга <br /> <span class='bold'> 1,7% от суммы чека</span>",
        },
        {
          desc: "оплата за страховой сбор <br /> <span class='bold'>0,5% от объявленной ценности</span>",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.money {
  margin: 107px 0 0;

  @media screen and (max-width: $tablet) {
    margin: 42px 0 0;
  }

  &__info-wrapper {
    padding: 0 32px 132px;

    @media screen and (max-width: $tablet) {
      padding: 0 32px 48px;
      background-image: none;
    }

    .form {
      &__input-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      &__button {
        padding: 28px;
      }
    }
  }

  &__image {
    display: block;
    margin: 58px auto 0;

    @media screen and (max-width: $tablet) {
      width: 260px;
      margin: 40px auto 0;
    }
  }
  .important-wrapper {
    margin: 0 auto;
    padding: 0 30px;
  }

  .important-information {
    margin: 0 auto;
    padding: 101px 113px 105px;
    max-width: 1515px;
    background: $color-white;
    border-radius: 38px;

    @media screen and (max-width: $tablet) {
      padding: 30px 20px 20px;
    }

    .title {
      margin: 0;
      color: $color-dark-purple;
    }
    .important-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 39px 0 0;
    }

    .important-card {
      width: 400px;
      margin: 0 0 52px;

      @media screen and (max-width: $tablet) {
        width: 100%;
        margin: 0 0 22px;
      }

      &:first-child {
        width: 452px;

        @media screen and (max-width: $tablet) {
          width: 100%;
        }
      }

      &:nth-child(2) {
        width: 452px;

        @media screen and (max-width: $tablet) {
          width: 100%;
        }
      }

      &__image {
        display: block;
        margin: 0 auto;
      }

      &__desc {
        margin: 30px 0 0;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        margin-top: 30px;
        color: $color-dark-purple;

        span {
          font-weight: 700;
          color: inherit;
        }

        .bold {
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
