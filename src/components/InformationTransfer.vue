<template>
  <div class="information-transfer">
    <img
      class="information-transfer__image-bg"
      src="../assets/images/information-transfer-bg.svg"
      alt=""
    />
    <div class="methods">
      <img class="methods__image" src="../assets/images/info.svg" alt="" />
      <h3 class="title">Способы передачи информации о заказах:</h3>
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
            На электронную почту order@dostaver.com
          </p>
        </div>
      </div>
    </div>

    <div class="revenue-report">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationTransferBlock",
};
</script>

<style lang="scss">
.information-transfer {
}
</style>
