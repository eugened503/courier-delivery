<template>
  <section class="application" id="application">
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
  name: "ApplicationBlock",
  components: { Form },
};
</script>

<style lang="scss">
.application {
  margin: 110px 0 0;
  padding: 0 32px 94px;
  background-repeat: no-repeat;
  background-position: 50% 112%;
  background-image: url("../assets/images/a-bg.svg");

  @media screen and (max-width: $laptop-small) {
    padding: 0 32px 54px;
    background-image: none;
  }

  @media screen and (max-width: $tablet) {
    margin: 27px 0 0;
  }

  .title {
    margin: 0 15px;
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
</style>
