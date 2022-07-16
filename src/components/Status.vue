<template>
  <section class="status">
    <h2 class="status__title">Организация процессов без лишней бюрократии</h2>
    <p class="status__desc">
      Вашим менеджерам не придётся заниматься дополнительной работой и отвечать
      всем <br />
      клиентам, когда они получат свои посылки. Информирование мы полностью
      берём на себя. <br />Связываемся с вами только в случае необходимости,
      если клиент не выходит на связь
    </p>
    <div class="status-items">
      <div class="status-item" v-for="(item, index) in items" :key="index">
        <img class="status-item__image" :src="item.image" alt="handset" />
        <h3 class="status-item__title">{{ item.title }}</h3>
        <p class="status-item__desc">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatusView",
  data() {
    return {
      items: [
        {
          image: require("../assets/images/si1.svg"),
          title: "Звоним заранее",
          desc: "Курьер всегда заранее звонит клиенту. Если ответа нет, с клиентом пытается связаться наш менеджер.",
        },
        {
          image: require("../assets/images/si2.svg"),
          title: "Сообщаем вам",
          desc: "Если и у менеджера не получилось дозвониться клиенту, мы обязательно сообщаем об этом вам.",
        },
        {
          image: require("../assets/images/si3.svg"),
          title: "Доставка без связи",
          desc: "Курьер может поехать на доставку несмотря на отсутствие связи с клиентом, если вы так решите.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.status {
  min-height: 478px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/images/status-bg.svg");
}
</style>
