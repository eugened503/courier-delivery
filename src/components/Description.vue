<template>
  <section class="description">
    <h2 class="description__title">Как это работает</h2>
    <div class="cards">
      <div class="card-wrapper" v-for="(item, index) in items" :key="index">
        <figure class="card" v-if="!item.arrow">
          <div class="card__image-wrapper">
            <img class="card__image" :src="item.image" alt="card" />
          </div>
          <figcaption class="card__title">
            {{ item.title }}
          </figcaption>
        </figure>
        <div class="card__arrow-wrapper" v-else>
          <img class="card__arrow" :src="item.image" alt="arrow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DescriptionView",
  data() {
    return {
      items: [
        {
          image: require("../assets/images/card1.svg"),
          title: "Оцените привлекательность темы",
          arrow: false,
        },
        {
          arrow: true,
          image: require("../assets/images/coolicon.svg"),
        },
        {
          image: require("../assets/images/card2.svg"),
          title: "Выполните совместные исследования",
          arrow: false,
        },
        {
          arrow: true,
          image: require("../assets/images/coolicon.svg"),
        },
        {
          image: require("../assets/images/card3.svg"),
          title: "Улучшите написанную работу",
          arrow: false,
        },
        {
          arrow: true,
          image: require("../assets/images/coolicon.svg"),
        },
        {
          image: require("../assets/images/card4.svg"),
          title: "Продвиньте свою работу",
          arrow: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.description {
  margin: 125px 0 0;

  @media screen and (max-width: $laptop-big) {
    margin: 70px 0 0;
  }
  @media screen and (max-width: $laptop-small) {
    margin: 67px 0 0;
  }

  @media screen and (max-width: $tablet) {
    margin: 69px 0 0;
  }

  @media screen and (max-width: $mobile-big) {
    margin: 52px 0 0;
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

    @media screen and (max-width: $tablet) {
      font-size: 24px;
      line-height: 24px;
    }

    @media screen and (max-width: $mobile-big - 1px) {
      font-size: 20px;
      line-height: 20px;
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    margin: 54px 162px 0;

    @media screen and (max-width: $laptop-big) {
      margin: 50px 158px 0;
    }

    @media screen and (max-width: $laptop-small) {
      margin: 44px 157px 0;
    }

    @media screen and (max-width: $laptop-small - 1px) {
      margin: 45px 46px 0;
    }

    @media screen and (max-width: $tablet - 1px) {
      flex-wrap: wrap;
      justify-content: center;
      margin: -5px 50px 0 47px;
    }

    @media screen and (max-width: $tablet - 1px) {
      margin: 8px 6px 0;
    }
  }

  .card-wrapper {
    &:nth-child(odd) {
      flex: 1;

      @media screen and (max-width: $tablet - 1px) {
        flex: 0 0 120px;
        margin: 50px 8% 0;
      }

      @media screen and (max-width: $mobile-big - 1px) {
        flex: 0 0 100px;
        margin: 38px 7.5% 0;
      }
    }

    &:nth-child(even) {
      width: percentage(177/1596);

      @media screen and (max-width: $laptop-big) {
        width: percentage(111/1050);
      }

      @media screen and (max-width: $laptop-small) {
        width: percentage(75.36/710);
      }

      @media screen and (max-width: $laptop-small - 1px) {
        width: percentage(65/676);
      }
      @media screen and (max-width: $tablet - 1px) {
        display: none;
      }
    }
  }

  .card {
    &__image-wrapper {
      min-height: 267px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 0 18px;
      background: $color-white;
      box-shadow: 0px 8px 23px rgba(44, 128, 255, 0.2);
      border-radius: 14px;

      @media screen and (max-width: $laptop-big) {
        min-height: 179px;
      }

      @media screen and (max-width: $laptop-small) {
        min-height: 120px;
      }

      @media screen and (max-width: $laptop-small - 1px) {
        min-height: 119px;
      }

      @media screen and (max-width: $mobile-big - 1px) {
        min-height: 100px;
        padding: 0;
      }
    }

    &__image {
      @media screen and (max-width: $laptop-big) {
        max-width: 120px;
      }

      @media screen and (max-width: $laptop-small) {
        max-width: 80px;
      }

      @media screen and (max-width: $mobile-big - 1px) {
        max-width: 71px;
      }
    }

    &__title {
      margin: 33px auto 0;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      max-width: 98%;
      color: $color-black;

      @media screen and (max-width: $laptop-big) {
        margin: 30px auto 0;
        font-size: 14px;
        line-height: 16px;
      }

      @media screen and (max-width: $laptop-small) {
        margin: 35px auto 0;
        font-size: 12px;
        line-height: 14px;
      }

      @media screen and (max-width: $laptop-small - 1px) {
        margin: 15px auto 0;
      }

      @media screen and (max-width: $mobile-big - 1px) {
        font-size: 10px;
        line-height: 12px;
      }
    }

    &__arrow-wrapper {
      display: flex;
      justify-content: center;
      margin: 133px auto 0;

      @media screen and (max-width: $laptop-big) {
        margin: 89px auto 0;
        img {
          width: 21px;
        }
      }

      @media screen and (max-width: $laptop-small) {
        margin: 60px auto 0;
        img {
          width: 15px;
        }
      }
    }
  }
}
</style>
