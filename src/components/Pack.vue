<template>
  <div class="pack">
    <img class="pack__image-bg" src="../assets/images/cloud.svg" alt="" />
    <img class="pack__image-bg" src="../assets/images/plus.svg" alt="" />
    <div class="pack__wrapper">
      <img class="pack__image" src="../assets/images/pack.svg" alt="" />
      <h3 class="pack__title">Упаковка</h3>
      <p class="pack__desc">
        Заказ должен быть упакован в <span> коробку</span> или герметичный
        <span>пакет</span> <br />
        <br />
        К упаковке должна быть прикреплена накладная как минимум с номером
        <span>телефона </span>клиента.<br />
        Дополнительная информация не обязательна, но приветствуется
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackBlock",
};
</script>

<style lang="scss">
.pack {
  position: relative;
  margin: 50px 0 0;
  padding: 0 31px 61px;

  @media screen and (max-width: $laptop-small) {
    margin: 27px 0 0;
    padding: 0 31px 51px;
  }

  &__image-bg {
    position: absolute;

    &:first-child {
      top: 180px;
      right: 246px;
    }

    &:nth-child(2) {
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: translate(-50%, -50%);
    }
  }

  &__image {
    display: block;
    margin: 0 auto;
  }

  &__title {
    margin: 35px 0 0;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }

  &__desc {
    margin: 35px 0 0;
    text-align: center;
    font-size: 18px;
    line-height: 28px;

    span {
      font-weight: 600;
    }
  }
}
</style>
