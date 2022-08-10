<template>
  <transition name="modal">
    <div class="modal-mask" v-if="showModal">
      <div class="modal">
        <button class="modal__button" @click="$emit('close')">
          <img src="../assets/images/cross.svg" alt="" />
        </button>
        <img class="modal__image" src="../assets/images/heart.svg" alt="" />
        <p class="modal__title">Спасибо за заявку!</p>
        <p class="modal__subtitle">В ближайшее время мы свяжемся с вами</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalBlock",
  props: {
    showModal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  width: 570px;
  padding: 38px 38px 136px;
  background-color: #fff;
  border-radius: 38px;

  @media screen and (max-width: $tablet) {
    width: 90%;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
    opacity: 0.15;
  }

  &__image {
    display: block;
    margin: 43px auto 0;
  }

  &__title {
    margin: 28px 0 0;
    font-family: "MuseoSansCyrl-500";
    font-size: 36px;
    line-height: 66px;
    text-align: center;
    color: $color-dark-purple;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: $color-dark-purple;
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
