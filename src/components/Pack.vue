<template>
  <div class="pack">
    <img class="pack__image-bg" src="../assets/images/cloud.svg" alt="" />
    <img class="pack__image-bg" src="../assets/images/plus.svg" alt="" />
    <div class="pack__wrapper">
      <img class="pack__image" src="../assets/images/pack.svg" alt="" />
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
}
</style>
