<template>
  <div>
    <Menu :menu="menu" />

    <div class="container">
      <router-view :room="room"></router-view>
    </div>
  </div>
</template>

<script>
import room from "./assets/room.js";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  mounted() {},
  components: {
    Menu,
  },
  data() {
    return {
      menu: ["지도", "분양", "관심목록", "방내놓기", "알림", "비대면 계약"],
      room: room,
    };
  },
  methods: {},
};
</script>

<!-- style -->
<style lang="scss">
@import "./style.css";
</style>
