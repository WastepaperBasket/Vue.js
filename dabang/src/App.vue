<template>
  <div>
    <Modal
      :room="room"
      :modal="modal"
      :click="click"
      @closeModal="modal = false"
    />

    <Menu :menu="menu" />

    <div class="container">
      <Card
        @openModal="
          modal = true;
          click = $event;
        "
        :room="room"
        :modal="modal"
      />
      <div class="col">
        <div>
          <KakaoMap />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Vue -->

<script>
import KakaoMap from "./components/KakaoMap.vue";
import room from "./assets/room.js";
import Modal from "./Modal.vue";
import Menu from "./Menu.vue";
import Card from "./Card.vue";

export default {
  name: "App",
  components: {
    KakaoMap,
    Modal,
    Menu,
    Card,
  },
  data() {
    return {
      price: this.price,
      click: 0,
      modal: false,
      menu: ["지도", "분양", "관심목록", "방내놓기", "알림", "비대면 계약"],
      room: room,
    };
  },
  methods: {},
};
</script>

<!-- style -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

@mixin button2() {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

@mixin button() {
  color: white;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 4px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: block;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Nanum Gothic", sans-serif;
  color: #222222;
}
button {
  @include button;
}

.container {
  display: flex;
  height: auto;
  overflow: hidden;
  .col {
    width: 80%;
  }
}

$breakpoint-mobile: 335px;
$breakpoint-tablet: 758px;
$breakpoint-desktop: 1024px;
@mixin mobile {
  @media (min-width: #{$breakpoint-mobile}) and (max-width: #{$breakpoint-tablet - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$breakpoint-desktop}) {
    @content;
  }
}
@include mobile {
  .row {
    display: none !important;
  }
  .menu {
    overflow-x: scroll;
    nav {
      font-size: 13px;
    }
  }
  .menu_user {
    display: none !important;
  }
  .rollingbanner {
    display: none !important;
  }
}

@include tablet {
  .row {
    width: 40% !important;
    height: 247vh !important;
  }
  .col {
    width: 60% !important;
  }
  nav {
    font-size: 13px;
  }
  .menu_user .Login {
    font-size: 11px;
  }
  .rollingbanner {
    width: 395px;
    right: 400px;
  }
  .row_title {
    width: 40% !important;
  }
  .photo {
    margin-left: 15px;
  }
  .white-bg {
    overflow: scroll;
    .footer_main {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .footer {
      display: flex;
    }
  }
}

@include desktop {
  .row {
    display: none;
  }
}
</style>
