<template>
  <section class="application">
    <img
      class="application__bg-image"
      src="../assets/images/plus.svg"
      alt="plus"
    />
    <h2 class="application__title">
      Отправляйте заявку, чтобы обсудить <br />
      условия сотрудничества
    </h2>
    <p class="application__desc">
      или свяжитесь с нами как вам будет удобно — по телефону <br />
      либо в одном из мессенджеров
    </p>
    <form class="form" action="">
      <div class="form__row">
        <input
          type="text"
          class="form__input"
          placeholder="Введите номер телефона"
        />
        <button type="submit" class="form__button">
          БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
        </button>
      </div>
      <label class="form__label">
        <input class="form__checkbox" type="checkbox" checked="checked" />
        <span class="form__privacy">
          Я согласен с
          <a class="form__policy" href="/privacy-policy/">
            политикой конфиденциальности
          </a>
        </span>
      </label>
    </form>
  </section>
</template>

<script>
export default {
  name: "OrganizationView",
};
</script>

<style lang="scss">
.application {
  min-height: 388px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/images/a-bg.svg");
}
</style>
