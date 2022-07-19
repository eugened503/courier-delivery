<template>
  <form class="form">
    <div class="form__input-wrapper">
      <input
        type="text"
        class="form__input"
        placeholder="Введите номер телефона"
      />

      <button type="button" class="form__button">{{ text }}</button>
    </div>
    <label class="form__label">
      <input type="checkbox" class="form__checkbox" checked="checked" />
      <span class="form__policy">
        Я согласен с
        <a class="form__link" href="/privacy-policy/"
          >политикой конфиденциальности
        </a>
      </span>
    </label>
  </form>
</template>

<script>
export default {
  name: "FormView",
  props: {
    text: {
      type: String,
      required: false,
      default: "ПЕРЕЗВОНИТЕ МНЕ",
    },
  },
};
</script>

<style lang="scss">
.form {
  margin: 44px 0 0;

  @media screen and (max-width: $laptop-small) {
    margin: 32px 0 0;
  }

  &__input {
    width: 284px;
    padding: 28px 33px;
    margin: 0 10px 0 0;
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    border: none;
    color: $color-purple;
    background: $color-white;
    border-radius: 43px;

    @media screen and (max-width: $tablet) {
      width: 100%;
    }

    &::placeholder {
      color: $color-purple;
      opacity: 0.45;
    }
  }

  &__button {
    width: 284px;
    padding: 28px 62px;
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #3e3300;
    transition: 0.3s;
    background: linear-gradient(180deg, #ffe149 0%, #ffd500 100%);
    border-radius: 43px;

    @media screen and (max-width: $tablet) {
      width: 100%;
      margin: 8px 0 0;
    }
  }

  &__label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0 0;
    font-size: 12px;
    line-height: 30px;

    @media screen and (max-width: $tablet) {
      margin: 8px -2px 0;
    }
  }

  &__checkbox {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: $color-white;
    margin-right: 10px;
    appearance: none;

    &:checked {
      background-image: url(../assets/images/checked.svg);
      background-repeat: no-repeat;
      background-position: 58% center;
    }
  }

  &__policy {
    font-size: 12px;
    line-height: 30px;
  }

  &__link {
    border-bottom: 1px dashed $color-white;
  }
}
</style>
