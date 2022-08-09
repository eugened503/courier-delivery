<template>
  <div class="information-transfer">
    <div class="methods">
      <img class="methods__image" src="../assets/images/info.svg" alt="" />
      <h3 class="methods__title">Способы передачи информации о заказах:</h3>
      <div class="methods-cards">
        <div class="methods-card">
          <p class="methods-card__text">Как</p>
          <p class="methods-card__text">Табличкой в Эксель в любом формате</p>
          <p class="methods-card__text">Обычным текстом</p>
        </div>
        <div class="methods-card">
          <p class="methods-card__text">Куда</p>
          <p class="methods-card__text">Telegram</p>
          <p class="methods-card__text">WhatsApp</p>
          <p class="methods-card__text">
            На электронную почту <br />
            order@dostaver.com
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="revenue-report">
      <div class="revenue-report-item">
        <img
          class="revenue-report-item__image"
          src="../assets/images/revenue.svg"
          alt=""
        />
        <h3 class="revenue-report-item__title">Выручка</h3>
        <p class="revenue-report-item__desc">
          Мы вычтем из выручки наше вознаграждение согласно отчёту и отправим её
          на Ваш расчётный счет на
          <span>следующий день после доставок </span>
        </p>
      </div>
      <div class="revenue-report-item">
        <img
          class="revenue-report-item__image"
          src="../assets/images/report.svg"
          alt=""
        />
        <h3 class="revenue-report-item__title">Отчет</h3>
        <p class="revenue-report-item__desc">
          Вместе с выручкой мы отправим отчёт. В нём будет содержаться
          статистика и информация о доставках, выполненных в отчётный день
        </p>
        <a class="revenue-report-item__link" href="" target="_blank">
          пример отчёта
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "InformationTransferBlock",
};
</script>

<style lang="scss">
.information-transfer {
  min-height: 926px;
  margin: 78px 0 0;
  padding: 0 30px;
  background-image: url(../assets/images/information-transfer-bg.svg);
  background-repeat: no-repeat;
  background-position: center bottom;

  @media screen and (max-width: $laptop-small) {
    margin: 51px 0 0;
    background-image: none;
  }
}

.information-transfer .methods {
  &__image {
    display: block;
    margin: 0 auto;
  }

  &__title {
    margin: 32px 0 0;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    text-align: center;

    @media screen and (max-width: $laptop-small) {
      font-size: 24px;
    }
  }

  .methods-cards {
    max-width: 852px;
    margin: 45px auto 0;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: $laptop-small) {
      display: block;
      margin: 23px auto 0;
      max-width: 600px;
    }
  }

  .methods-cards .methods-card {
    width: calc(50% - 15px);

    @media screen and (max-width: $laptop-small) {
      width: 100%;
      margin: 0 auto;
    }

    &:last-child {
      @media screen and (max-width: $laptop-small) {
        margin: 20px auto 0;
      }
    }

    &__text {
      padding: 26px 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      border: 1px solid #ffffff;
      text-align: center;

      &:first-child {
        border-radius: 38px 38px 0 0;
        padding: 14px 0;
        background: $color-white;
        color: $color-dark-purple;
      }

      &:last-child {
        border-radius: 0 0 38px 38px;
      }
    }
  }
}
</style>
