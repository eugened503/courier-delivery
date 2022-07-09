<template>
  <section class="price">
    <h2 class="price__title">Стоимость курьерских услуг</h2>
    <p class="price__subtitle">
      Вес и стоимость в таблице указаны для одной доставки
    </p>
    <div class="table-wrapper">
      <img
        class="table-wrapper__image"
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
        class="table-wrapper__image"
        src="../assets/images/right-img.svg"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "PriceView",
};
</script>

<style lang="scss">
.price {
  &__title {
    text-align: center;
  }

  &__subtitle {
    text-align: center;
  }
  .table-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 67px 0 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("../assets/images/price-bg.svg");
    min-height: 620px;

    &__image {
      position: absolute;
      z-index: 1;

      &:first-child {
        top: 380px;
        transform: translateX(-581px);
      }

      &:last-child {
        top: 64px;
        transform: translateX(556px);
      }
    }
  }

  .table {
    z-index: 2;

    &__row {
      display: flex;
      align-self: center;
    }

    &__cell {
      width: 129px;
      padding: 22px 0;
      //padding: 22px 45px;
      text-align: center;
      border: 1px solid $color-white;
      background: $color-purple;

      &:first-child {
        width: 261px;
        padding: 22px 0 22px 42px;
        text-align: left;
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

  // table {
  //   border-collapse: collapse;
  //   border-radius: 38px;
  //   display: block;
  //   overflow: hidden;
  //   border: 1px solid $color-white;
  //   thead tr {
  //     .table__head-cell {
  //       //border-top-color: $color-white;
  //     }
  //   }

  //   tbody tr:first-child {
  //     .table__body-cell:first-child {
  //       background: $color-purple;
  //       border: 1px solid $color-white;
  //     }
  //   }

  //   tbody tr:last-child {
  //     .table__body-cell:first-child {
  //       border-bottom-color: $color-white;
  //     }
  //   }
  // }

  // &__head-cell {
  //   padding: 22px 45px;
  //   text-align: center;
  //   background: $color-white;
  //   border: 1px solid $color-purple;

  //   &:first-child {
  //     text-align: left;
  //     background: $color-purple;
  //     border: 1px solid $color-white;
  //   }
  // }

  // &__body-cell {
  //   padding: 22px 45px;
  //   text-align: center;
  //   border: 1px solid $color-white;

  //   &:first-child {
  //     text-align: left;
  //     background: $color-white;
  //     border-bottom-color: $color-purple;
  //   }
  // }
}
</style>
