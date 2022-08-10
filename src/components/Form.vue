<template>
  <form class="form">
    <div class="form__input-wrapper">
      <input
        type="text"
        class="form__input"
        placeholder="Введите номер телефона"
        v-maska="'+7(###)###-##-##'"
        v-model="tel"
        :class="{ error: v$.tel.$errors.length }"
      />

      <button
        type="button"
        class="form__button"
        :disabled="v$.$invalid"
        @click="sendRequest"
      >
        {{ text }}
      </button>
    </div>
    <label class="form__label">
      <input type="checkbox" class="form__checkbox" v-model="check" />
      <span class="form__policy">
        Я согласен с
        <a class="form__link" href="/privacy-policy/"
          >политикой конфиденциальности
        </a>
      </span>
    </label>
    <div class="form__errors">
      <div v-for="(error, index) of v$.check.$errors" :key="index">
        <p>{{ error.$message }}</p>
      </div>
    </div>
  </form>
  <modal :showModal="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>Карточка успешно добавлена!</h3>
    </template>
    <template v-slot:body>
      <p>Поздравляем! Карточка успешно добавлена в общий список товаров! 🎉</p>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { mustBeAccepted } from "@/customValidators/mustBeAccepted.js";
export default {
  name: "FormBlock",
  components: { Modal },
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    text: {
      type: String,
      required: false,
      default: "ПЕРЕЗВОНИТЕ МНЕ",
    },
  },
  data() {
    return {
      tel: null,
      check: true,
      showModal: false,
    };
  },
  methods: {
    sendRequest() {
      this.tel = "";
      this.v$.$reset();
      setTimeout(() => (this.showModal = true), 500);
    },
  },
  validations() {
    return {
      tel: {
        required,
        $autoDirty: true,
      },
      check: {
        $autoDirty: true,
        mustBeAccepted: helpers.withMessage(
          "Поле является обязательным",
          mustBeAccepted
        ),
      },
    };
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
    border: 1px solid transparent;
    color: $color-purple;
    background: $color-white;
    border-radius: 43px;

    @media screen and (max-width: $tablet) {
      width: 100%;
      margin: 0;
    }

    &::placeholder {
      color: $color-purple;
      opacity: 0.45;
    }

    &.error {
      border: 1px solid red;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      animation: fade-in 0.4s ease-in;
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

  &__errors {
    margin: 4px auto 0;
    min-height: 19px;
    text-align: center;

    p {
      color: red;
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
