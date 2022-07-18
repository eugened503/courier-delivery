<template>
  <div class="contacts">
    <div class="contacts__connection">
      <a class="contacts__link" href="tel:+7 499 408 47 70">+7 499 408 47 70</a>
      <p class="contacts__connection-item">ежедневно с 08:00 до 20:00</p>
    </div>
    <nav class="contacts__messengers">
      <ul class="contacts__list">
        <li class="contacts__list-item">
          <a
            class="contacts__link"
            href="https://wa.me/74994084770"
            target="_blank"
          >
            <img src="../assets/images/wa.svg" alt="wa-logo" />
          </a>
        </li>
        <li class="contacts__list-item">
          <a
            class="contacts__link"
            href="https://t.me/dostaver"
            target="_blank"
          >
            <img src="../assets/images/tg.svg" alt="tg-logo" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ContactsView",
};
</script>

<style lang="scss">
.contacts {
  display: flex;
  align-items: center;
  justify-content: center;

  &__list {
    display: flex;
  }

  &__connection {
    margin: 0 26px 0 0;

    @media screen and (max-width: $laptop-big) {
      margin: 0 20px 0 0;
    }

    @media screen and (max-width: $mobile-middle) {
      margin: 0 9px 0 0;
    }
  }

  &__link {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    @media screen and (max-width: $mobile-middle) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__connection-item {
    font-size: 16px;
    line-height: 19px;

    @media screen and (max-width: $mobile-middle) {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__list-item {
    &:first-child {
      margin: 0 6px 0 0;
    }
  }

  &__list {
    display: flex;
    align-items: center;
  }

  &__link {
    display: flex;
    align-items: center;
  }
}
</style>
