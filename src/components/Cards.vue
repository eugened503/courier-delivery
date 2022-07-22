<template>
  <div class="card-wrapper">
    <img
      class="card-wrapper__image"
      src="../assets/images/il.svg"
      alt="image-left"
    />
    <div class="cards">
      <article class="card" v-for="(item, index) in items" :key="index">
        <div class="card__step">
          <div class="card__circle">
            {{ item.step }}
          </div>
          <h4 class="card__title" v-html="item.title" />
        </div>
        <p class="card__desc" v-html="item.desc" />
      </article>
    </div>
    <img
      class="card-wrapper__image"
      src="../assets/images/ir.svg"
      alt="image-right"
    />
  </div>
</template>

<script>
export default {
  name: "CardsBlock",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.card-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 63px 0 0;
  padding: 0 31px;

  @media screen and (max-width: $tablet) {
    margin: 23px 0 0;
  }

  &__image {
    position: absolute;
    z-index: 1;

    @media screen and (max-width: $laptop-big) {
      display: none;
    }

    &:first-child {
      top: 126px;
      left: 0;
    }

    &:last-child {
      top: 52px;
      right: 0;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
    z-index: 2;

    .card {
      background: $color-white;
      border-radius: 38px;
      width: 570px;
      margin: 0 0 30px;
      padding: 50px 50px 43px;

      &:last-child {
        @media screen and (max-width: $laptop-big) {
          margin: 0;
        }
      }

      @media screen and (max-width: $laptop-big) {
        width: 100%;
      }

      @media screen and (max-width: $laptop-big) {
        margin: 0 0 20px;
        padding: 29px 20px 30px;
      }

      &__step {
        display: flex;

        @media screen and (max-width: $tablet) {
          display: block;
        }
      }

      &__circle {
        display: flex;
        align-items: center;
        flex: 0 0 57px;
        margin: 0 29px 0 0;
        width: 57px;
        height: 57px;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: $color-white;
        background: $color-purple;
        justify-content: center;
        border-radius: 50%;

        @media screen and (max-width: $tablet) {
          margin: 0 auto;
        }
      }

      &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        color: $color-purple;

        @media screen and (max-width: $tablet) {
          margin: 21px 0 0;
        }
      }

      &__desc {
        margin: 30px 0 0;
        font-size: 18px;
        line-height: 28px;
        color: $color-purple;

        span {
          font-weight: 700;
          color: inherit;
        }
      }

      a {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        border-bottom: 1px dashed $color-dark-purple;
        color: inherit;
        padding-bottom: 5px;
      }
    }
  }
}
</style>
