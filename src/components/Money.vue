<template>
  <section class="money">
    <div class="money__info-wrapper">
      <h2 class="money__title">Работая с нами, вы на 100 % соблюдаете 54-ФЗ</h2>
      <p class="money__desc">
        Курьеры Dostaver не ограничены лишь наличным методом приёма выручки.
        <br />
        <br />
        Каждый курьер имеет при себе мобильный <span>терминал aQsi 5</span> со
        встроенным эквайрингом.<br />
        <br />
        Ваши клиенты могут по факту оплачивать заказ картой <br />
        и получать бумажный кассовый чек.
      </p>
      <form class="money__form" action="">
        <div class="money__row">
          <input
            type="text"
            class="money__input"
            placeholder="Введите номер телефона"
          />
          <button type="submit" class="money__button">
            ОБСУДИТЬ СОТРУДНИЧЕСТВО
          </button>
        </div>
        <label class="money__label">
          <input class="money__checkbox" type="checkbox" checked="checked" />
          <span class="money__privacy">
            Я согласен с
            <a class="money__дштл" href="/privacy-policy/">
              политикой конфиденциальности
            </a>
          </span>
        </label>
      </form>
      <img
        class="money__image"
        src="../assets/images/terminal.svg"
        alt="terminal"
      />
    </div>
    <div class="important-information">
      <h2 class="important-information__title">Важная информация</h2>
      <div class="important-cards">
        <div class="important-card" v-for="(item, index) in items" :key="index">
          <img
            class="important-card__image"
            src="../assets/images/i.svg"
            alt=""
          />
          <p class="important-card__desc" v-html="item.desc" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganizationView",
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
          desc: "стоимость кассового обслуживания <br /> <span>0,7% от суммы чека</span>",
        },
        {
          desc: "стоимость эквайринга <br /> <span> 1,7% от суммы чека</span>",
        },
        {
          desc: "оплата за страховой сбор <br /> <span>0,5% от объявленной ценности</span>",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.money {
  &__info-wrapper {
    min-height: 1014px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("../assets/images/money-bg.svg");
  }
}
</style>
