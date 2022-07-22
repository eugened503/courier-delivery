<template>
  <section class="application">
    <h2 class="title">
      Отправляйте заявку, чтобы обсудить <br />
      условия сотрудничества
    </h2>
    <p class="subtitle">
      или свяжитесь с нами как вам будет удобно — по телефону <br />
      либо в одном из мессенджеров
    </p>
    <Form text="БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ" />
  </section>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "ApplicationView",
  components: { Form },
};
</script>

<style lang="scss">
.application {
  margin: 110px 0 0;
  padding: 0 32px;
  min-height: 426px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/images/a-bg.svg");

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
</style>
