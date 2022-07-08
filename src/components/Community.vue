<template>
  <section class="community">
    <h2 class="community__title">Сообщество</h2>
    <p class="community__subtitle">Тысячи учёных уже предлагают свою помощь</p>

    <div class="scientists">
      <article
        class="scientists-card"
        v-for="(item, index) in items"
        :key="index"
      >
        <ul class="scientists-card__tabs">
          <li
            v-for="(tab, index) in item.tabs"
            :key="index"
            class="scientists-card__tab"
          >
            {{ tab.text }}
          </li>
        </ul>
        <h3 class="scientists-card__title">
          {{ item.title }}
        </h3>
        <div class="scientists-card__comment">
          <h4 class="scientists-card__comment-title">Комментарий</h4>
          <p class="scientists-card__comment-text">
            {{ item.comment }}
          </p>
        </div>
        <div class="scientists-card__award">
          <h4 class="scientists-card__award-title">Вознаграждение</h4>
          <ul class="scientists-card__award-tabs">
            <li
              class="first-child scientists-card__award-item"
              :class="{ price: item.price }"
              v-for="(item, index) in item.award"
              :key="index"
            >
              <span v-show="item.text">{{ item.text }}</span>
              <span v-show="item.price"> {{ item.price }}</span>
            </li>
          </ul>
        </div>
        <div class="scientists-card__keys-wrapper">
          <ul class="scientists-card__keys">
            <li
              class="first-child scientists-card__keys-item"
              v-for="(item, index) in item.keys"
              :key="index"
            >
              <img
                class="scientists-card__keys-image"
                :src="item.image"
                alt="key-image"
                v-if="item.image"
              />
              {{ item.text }}
            </li>
          </ul>
        </div>
        <div class="scientists-card__scientist">
          <img
            class="scientists-card__scientist-image"
            :src="item.avatar"
            alt="scientist"
          />
          <div class="scientists-card__scientist-info">
            <h4 class="scientists-card__scientist-name">{{ item.name }}</h4>
            <p class="scientists-card__scientist-text">{{ item.degree }}</p>
            <p class="scientists-card__scientist-text">
              {{ item.university }}
            </p>
          </div>
          <div
            v-show="!item.cooperation"
            class="scientists-card__scientist-rating"
          >
            <img
              class="scientists-card__rating-image"
              src="../assets/images/star.svg"
              alt="scientist"
            />
            {{ item.rating }}
          </div>
        </div>
        <div class="scientists-card__footer">
          <button class="scientists-card__button-left" v-if="item.cooperation">
            <img
              class="scientists-card__button-image"
              src="../assets/images/done.svg"
              alt="key-image"
            />
            Сотрудничество предложено
          </button>
          <button class="button-passive scientists-card__button-left" v-else>
            Предложить сотрудничество
          </button>
          <button class="scientists-card__button-right">
            <arrow-svg />
          </button>
        </div>
      </article>
    </div>
    <button class="community__button">Смотреть все</button>
  </section>
</template>

<script>
import ArrowSvg from "@/components/ArrowSvg.vue";
export default {
  name: "DescriptionView",
  components: { ArrowSvg },
  data() {
    return {
      items: [
        {
          tabs: [{ text: "Цитировать других" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
            { text: "+1" },
          ],
          keys: [
            {
              text: "первый длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "второй ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: true,
          rating: "4.4",
        },
        {
          tabs: [
            { text: "Повысить цитируемость своих статей" },
            { text: "Medicine/Pharma" },
          ],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [{ text: "Оплата деньгами" }, { price: "$2500" }],
          keys: [
            {
              text: "первый ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "второй ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "третий ключ",
              image: require("../assets/images/key-image.svg"),
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [{ text: "Оплата деньгами" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Оплата деньгами" },
            { price: "$2500" },
            { text: "+2" },
          ],
          keys: [
            {
              text: "первый длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "второй ключ",
              image: require("../assets/images/key-image.svg"),
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [{ text: "Цитировать других" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
            { text: "+1" },
          ],
          keys: [
            {
              text: "первый длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "второй ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [
            { text: "Повысить цитируемость своих статей" },
            { text: "Medicine/Pharma" },
          ],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [{ text: "Оплата деньгами" }, { price: "$2500" }],
          keys: [
            {
              text: "первый и очень сильно длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
        {
          tabs: [{ text: "Оплата деньгами" }, { text: "Neuro/Psycho" }],
          title:
            "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии",
          comment: "Могу ещё помочь со статистической обработкой",
          award: [
            { text: "Процитировать других" },
            { text: "Принять в соавторы" },
            { text: "+1" },
          ],
          keys: [
            {
              text: "первый и очень сильно длинный ключ",
              image: require("../assets/images/key-image.svg"),
            },
            {
              text: "+1",
            },
          ],
          avatar: require("../assets/images/ava.jpg"),
          name: "Артём Белоусов",
          degree: "учёный (кандидат наук)",
          university: "Санкт-Петербургский горный университет",
          cooperation: false,
          rating: "4.4",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.community {
  margin: 145px 137.5px 0 141.5px;

  @media screen and (max-width: $laptop-big) {
    margin: 70px 162.5px 0 137.5px;
  }

  @media screen and (max-width: $laptop-small) {
    margin: 78px 118px 0;
  }

  @media screen and (max-width: $tablet) {
    margin: 78px 25px 0;
  }

  @media screen and (max-width: $mobile-big) {
    margin: 94px 0 0;
  }

  &__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #383838;

    @media screen and (max-width: $laptop-big) {
      font-size: 26px;
      line-height: 26px;
    }

    @media screen and (max-width: $laptop-small) {
      font-size: 24px;
      line-height: 24px;
    }
  }

  &__subtitle {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 45px;
    text-align: center;
    margin: 15px 0 0;
    color: #464646;

    @media screen and (max-width: $laptop-big) {
      margin: 13px 0 0;
      font-size: 16px;
      line-height: 36px;
    }

    @media screen and (max-width: $laptop-small) {
      margin: 10px 0 0;
    }
  }

  .scientists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -12px 0 0;

    @media screen and (max-width: $laptop-big) {
      margin: -3px 0 0;
    }

    @media screen and (max-width: $tablet) {
      margin: -5px 0 0;
    }

    @media screen and (max-width: $mobile-big) {
      margin: -11px 0 0;
    }
  }

  .scientists-card {
    max-width: 500px;
    margin: 47px percentage(23.5/1688) 0;
    padding: 14px 25px 25px;
    background: $color-white;
    box-shadow: 0px 3px 17px rgba(43, 123, 211, 0.06);
    border-radius: 10px;

    @media screen and (max-width: $laptop-big) {
      margin: 33px percentage(16.5/1066) 0;
    }

    @media screen and (max-width: $laptop-small) {
      max-width: 376px;
      margin: 18px percentage(9/788) 0;
    }

    @media screen and (max-width: $tablet) {
      //max-width: 329px;
      margin: 20px percentage(10/718) 0;
      padding: 15px 15px 20px;
    }

    @media screen and (max-width: $mobile-big) {
      max-width: 340px;
      margin: 26px percentage(15/320) 0;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      max-width: 290px;
    }

    &__tabs {
      display: flex;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 900;
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      @media screen and (max-width: $laptop-small) {
        font-size: 9px;
        line-height: 11px;
      }
    }

    &__tab {
      padding: 10px 15px 8px;
      border-radius: 75px;
      max-width: 248px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;

      @media screen and (max-width: $laptop-small) {
        padding: 9px 10px 8px;
      }

      &:first-child {
        color: #bc9300;
        background: #fdffe7;
      }

      &:last-child {
        margin: 0 0 0 10px;
        color: #00a880;
        background: #ebfffa;
      }
    }

    &__title {
      margin: 27px 0 0;
      font-weight: 600;
      font-size: 18px;
      line-height: 19px;
      color: $color-black;

      @media screen and (max-width: $laptop-small) {
        display: -webkit-box;
        font-size: 16px;
        line-height: 18px;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    &__comment {
      margin: 27px 0 0;

      @media screen and (max-width: $laptop-small) {
        margin: 15px 0 0;
      }
    }

    &__comment-title {
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      color: #505050;

      @media screen and (max-width: $laptop-small) {
        font-size: 14px;
        line-height: 14px;
      }
    }

    &__comment-text {
      margin: 10px 0 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.005em;
      color: $color-black;

      @media screen and (max-width: $laptop-small) {
        font-size: 12px;
        line-height: 14px;
      }
    }

    &__award {
      margin: 27px 0 0;

      @media screen and (max-width: $laptop-small) {
        margin: 19px 0 0;
      }
    }

    &__award-title {
      font-weight: 500;
      font-size: 15px;
      line-height: 15px;
      color: #505050;

      @media screen and (max-width: $laptop-small) {
        font-size: 14px;
        line-height: 14px;
      }
    }

    &__award-tabs {
      display: flex;
      margin: 10px 0 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: $color-blue;

      @media screen and (max-width: $laptop-small) {
        margin: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        font-size: 12px;
        line-height: 12px;
      }
    }

    &__award-item {
      margin: 0 10px 0 0;
      padding: 9px 16.5px 7px;
      border: 1px solid $color-blue;
      border-radius: 75px;
      cursor: pointer;

      @media screen and (max-width: $laptop-small) {
        padding: 9px 10px;
        margin: 10px 10px 0 0;
      }

      &:last-child {
        margin: 0;

        @media screen and (max-width: $laptop-small) {
          margin: 10px 10px 0 0;
        }
      }
    }

    &__keys-wrapper {
      margin: 54px 0 0;
      padding: 0 0 15px;
      border-bottom: 1px solid #cadcf8;

      @media screen and (max-width: $laptop-small) {
        margin: 24px 0 0;
      }
    }

    &__keys {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      text-transform: lowercase;
      color: #2f2f2f;

      @media screen and (max-width: $laptop-small) {
        flex-wrap: wrap;
        justify-content: flex-start;
        font-size: 12px;
        line-height: 12px;
      }
    }

    &__keys-item {
      display: flex;
      align-items: center;
      margin: 0 15px 0 0;
      padding: 8px 15px;
      background: #f3f3f3;
      border-radius: 75px;
      cursor: pointer;

      @media screen and (max-width: $laptop-small) {
        padding: 9px 10px;
        margin: 10px 10px 0 0;
      }

      &:last-child {
        margin: 0;

        @media screen and (max-width: $laptop-small) {
          margin: 10px 10px 0 0;
        }
      }
    }

    &__keys-image {
      margin: 0 8px 0 0;

      @media screen and (max-width: $laptop-small) {
        margin: 0 5px 0 0;
      }
    }

    &__scientist {
      display: flex;
      align-items: center;
      margin: 18px 0 0;
      padding: 0 0 16px;
      border-bottom: 1px solid #cadcf8;

      @media screen and (max-width: $laptop-small) {
        margin: 11px 0 0;
        padding: 0 0 12px;
      }
    }

    &__scientist-image {
      border-radius: 50%;
      margin: 0 11px 0 0;

      @media screen and (max-width: $laptop-small) {
        width: 56px;
        height: 56px;
        margin: 0 10px 0 0;
      }
    }

    &__scientist-name {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: $color-black;

      @media screen and (max-width: $laptop-small) {
        font-size: 14px;
        line-height: 16px;
      }
    }

    &__scientist-text {
      margin: 4px 0 0;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: $color-black;

      @media screen and (max-width: $laptop-small) {
        font-size: 12px;
        line-height: 14px;
      }
    }

    &__scientist-rating {
      display: flex;
      align-items: center;
      margin: 0 0 0 auto;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: $color-blue;

      @media screen and (max-width: $laptop-small) {
        font-size: 18px;
        line-height: 21px;
      }
    }

    &__rating-image {
      margin: 0 5px 0 0;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      margin: 15px 0 0;

      @media screen and (max-width: $laptop-small) {
        margin: 10px 0 0;
      }
    }

    &__button-left {
      padding: 12px 27px 10px 25px;
      background: #d9d9d9;
      border-radius: 123px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $color-white;
      border: 1px solid transparent;
      pointer-events: none;

      @media screen and (max-width: $laptop-small) {
        padding: 10px 22px;
        font-size: 11px;
        line-height: 14px;
      }

      @media screen and (max-width: $mobile-big - 1px) {
        padding: 10px 18px 7px;
        font-size: 10px;
        line-height: 12px;
      }
    }

    .button-passive {
      background: $color-blue;
      pointer-events: inherit;

      &:hover {
        background: $color-white;
        color: $color-blue;
        border: 1px solid $color-blue;
      }
    }

    &__button-image {
      margin: 0 7px 0 0;

      @media screen and (max-width: $laptop-small) {
        display: none;
      }
    }

    &__button-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 41px;
      height: 41px;
      border-radius: 50%;
      border: 1.5px solid $color-blue;

      @media screen and (max-width: $laptop-small) {
        width: 33px;
        height: 33px;

        svg {
          width: 7px;
          height: 12px;
        }
      }

      @media screen and (max-width: $mobile-big - 1px) {
        width: 29px;
        height: 29px;

        svg {
          width: 6px;
          height: 11px;
        }
      }

      &:hover {
        background: $color-blue;
        color: $color-white;

        svg path {
          stroke: $color-white;
        }
      }
    }

    .price {
      border: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      padding: 9px 0 7px;
      color: #2f2f2f;
      pointer-events: none;
    }
  }

  &__button {
    display: block;
    margin: 49px auto 0;
    padding: 15px 63px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border: 2px solid $color-blue;
    border-radius: 123px;
    color: $color-blue;

    @media screen and (max-width: $laptop-small) {
      margin: 53px auto 0;
      padding: 14px 43px;
      font-size: 13px;
      line-height: 15px;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      margin: 30px auto 0;
      padding: 13px 30px;
    }

    &:hover {
      background: $color-blue;
      color: $color-white;
    }
  }

  .first-child {
    @media screen and (max-width: $laptop-small) {
      display: none;
      &:first-child {
        display: flex;
      }
    }
  }
}
</style>
