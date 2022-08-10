<template>
  <section class="price" id="price">
    <h2 class="title">Стоимость курьерских услуг</h2>
    <p class="subtitle">Вес и стоимость в таблице указаны для одной доставки</p>
    <div class="table-wrapper">
      <img
        class="table-wrapper__image first-child"
        src="../assets/images/left-img.svg"
        alt=""
      />
      <div class="table">
        <div class="table__row">
          <div class="table__cell cell-br-tl">Доставок в день</div>
          <div class="table__cell color-bg br-color">от 51</div>
          <div class="table__cell color-bg br-color">до 50</div>
          <div class="table__cell color-bg br-color">до 25</div>
          <div class="table__cell cell-br-tr color-bg">до 10</div>
        </div>

        <div class="table__row">
          <div class="table__cell">Вес, до</div>
          <div class="table__cell"></div>
          <div class="table__cell"></div>
          <div class="table__cell"></div>
          <div class="table__cell"></div>
        </div>
        <div class="table__row">
          <div class="table__cell color-bg bb-color">1 кг.</div>
          <div class="table__cell">180</div>
          <div class="table__cell">200</div>
          <div class="table__cell">220</div>
          <div class="table__cell">240</div>
        </div>
        <div class="table__row">
          <div class="table__cell color-bg bb-color">3 кг.</div>
          <div class="table__cell">200</div>
          <div class="table__cell">220</div>
          <div class="table__cell">240</div>
          <div class="table__cell">260</div>
        </div>
        <div class="table__row">
          <div class="table__cell color-bg bb-color">5 кг.</div>
          <div class="table__cell">220</div>
          <div class="table__cell">240</div>
          <div class="table__cell">260</div>
          <div class="table__cell">280</div>
        </div>
        <div class="table__row">
          <div class="table__cell color-bg bb-color">10 кг.</div>
          <div class="table__cell">270</div>
          <div class="table__cell">290</div>
          <div class="table__cell">310</div>
          <div class="table__cell">330</div>
        </div>
        <div class="table__row">
          <div class="table__cell color-bg bb-color">15 кг.</div>
          <div class="table__cell">350</div>
          <div class="table__cell">390</div>
          <div class="table__cell">410</div>
          <div class="table__cell">430</div>
        </div>
        <div class="table__row">
          <div class="table__cell color-bg bb-color">20 кг.</div>
          <div class="table__cell">400</div>
          <div class="table__cell">430</div>
          <div class="table__cell">470</div>
          <div class="table__cell">490</div>
        </div>
        <div class="table__row">
          <div class="table__cell cell-br-bl color-bg">Забор товара</div>
          <div class="table__cell">0</div>
          <div class="table__cell">0</div>
          <div class="table__cell">0</div>
          <div class="table__cell cell-br-br">290</div>
        </div>
      </div>
      <img
        class="table-wrapper__image last-child"
        src="../assets/images/right-img.svg"
        alt=""
      />
      <img class="table-wrapper__auto" src="../assets/images/auto.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "PriceBlock",
};
</script>

<style lang="scss">
.price {
  margin: 101px 0 0;

  @media screen and (max-width: $tablet) {
    margin: 37px 0 0;
  }

  .table-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 67px 0 0;
    background-repeat: no-repeat;
    background-position: 50% 195%;
    background-image: url("../assets/images/price-bg.svg");
    min-height: 620px;

    @media screen and (max-width: $laptop-small) {
      margin: 31px 0 0;
      align-items: center;
      flex-direction: column;
      background-image: none;
    }

    &__image {
      position: absolute;
      z-index: 1;

      @media screen and (max-width: $laptop-small) {
        display: none;
      }
    }

    .first-child {
      top: 380px;
      transform: translateX(-581px);
    }

    .last-child {
      top: 64px;
      transform: translateX(556px);
    }

    &__auto {
      display: none;

      @media screen and (max-width: $laptop-small) {
        display: block;
        margin: 54px 0 0;
      }
    }
  }

  .table {
    z-index: 2;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    @media screen and (max-width: $laptop-small) {
      font-size: 14px;
      line-height: 15px;
    }

    &__row {
      display: flex;
      align-self: center;
    }

    &__cell {
      width: 129px;
      padding: 22px 0;
      text-align: center;
      border: 1px solid $color-white;
      background: $color-purple;

      @media screen and (max-width: $laptop-small) {
        padding: 12px 0;
        width: 87px;
      }

      @media screen and (max-width: $tablet) {
        padding: 21px 0;
        width: 51px;
      }

      &:first-child {
        width: 261px;
        padding: 22px 0 22px 42px;
        text-align: left;

        @media screen and (max-width: $laptop-small) {
          padding: 7px 12px;
          width: 90px;
        }
      }
    }

    .cell-br-tl {
      border-radius: 37.5px 0 0 0;
    }

    .cell-br-tr {
      border-radius: 0 37.5px 0 0;
    }

    .cell-br-bl {
      border-radius: 0 0 0 37.5px;
    }

    .cell-br-br {
      border-radius: 0 0 37.5px 0;
    }

    .color-bg {
      color: $color-purple;
      background: $color-white;
    }

    .br-color {
      border-right: 1px solid $color-purple;
    }

    .bb-color {
      border-bottom: 1px solid $color-purple;
    }
  }
}
</style>
