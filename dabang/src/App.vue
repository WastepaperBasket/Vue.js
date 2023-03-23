<template>
  <div>
    <Modal :room="room" :modal="modal" :click="click" />

    <Menu :menu="menu" />

    <div class="container">
      <div class="row">
        <div>
          <div class="row_title">
            <div style="margin-top: 10px">
              <h4>도영은 허위매물 ZERO 도전중!</h4>
              <p>전문가가 직접 현장확인 및 촬영환 매물이니 안심하세요 :)</p>
            </div>
          </div>
          <div class="row_title ai_user" style="top: 139px">
            <div class="row_main">
              <div class="row_title_user">
                <img src="./assets/aiphoto.png" />
              </div>
              <div class="row_title_content">
                <h1 class="user_title">AI 공인중개사 사무소</h1>
                <p class="user_content">프리미엄 Since 23.03.22</p>
              </div>
            </div>
          </div>
        </div>

        <div class="box">
          <img src="./assets/aiconstruct.png" class="room-img" />
          <div class="img-box">
            <h4>월세 3000/250</h4>
            <p>오피스텔 · AI원플러스</p>
            <P>27층, 192m², 관리비 180만</P>
            <p>AI역세권.4월입주가능. 주거용.</p>
          </div>
        </div>
        <div
          @click="
            modal = true;
            click = i;
          "
          v-for="(box, i) in room"
          :key="i"
          class="box"
        >
          <img :src="box.image" class="room-img" />
          <!-- 속성 중요 ····· -->
          <div class="img-box">
            <h4>{{ box.price }}</h4>
            <p>{{ box.title }}</p>
            <p>{{ box.content }}</p>
            <p>{{ box.content2 }}</p>
          </div>
        </div>
      </div>
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
var clientKey = "test_ck_OyL0qZ4G1VO2j12BBPM3oWb2MQYg";
// eslint-disable-next-line no-unused-vars,no-undef
var tossPayments = TossPayments(clientKey);

import KakaoMap from "./components/KakaoMap.vue";
import room from "./assets/room.js";
import Modal from "./Modal.vue";
import Menu from "./Menu.vue";

export default {
  name: "App",
  components: {
    KakaoMap,
    Modal,
    Menu,
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
  methods: {
    increase() {
      this.police++;
    },
    PaymentBtn: function (method) {
      tossPayments.requestPayment(method, {
        amount: this.price,
        orderId: "xnDIqpt7Dlfdtd99WwXgu",
        orderName: "DoYoungPark",
        customerName: "고객",
        successUrl: window.location.origin + "/success",
        failUrl: window.location.origin + "/fail",
      });
    },
  },
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
  .row {
    position: relative;
    top: 206px;
    text-align: center;
    width: 23%;
    height: 256vh;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    overflow-y: scroll;
    .row_title {
      position: fixed;
      top: 72px;
      left: 0;
      font-size: 13px;
      width: 24%;
      height: 67px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgb(237, 237, 237);
      background: #f1f3f5;
      h4 {
        color: #326cf9;
      }
    }
    .img-box {
      margin-left: 6px;
      text-align: left;
      h4 {
        margin-bottom: 4px;
        line-height: 27px;
        height: 27px;
        font-size: 16px;
        font-weight: 700;
      }
      p {
        color: rgba(34, 34, 34, 0.7) !important;
        font-size: 13px;
        line-height: 16px;
        text-overflow: ellipsis !important;
        margin-bottom: 10px;
      }
    }
    .room-img {
      width: 45%;
    }
    .box {
      cursor: pointer;
      padding: 10px 5px;
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid #eee;
      transition: 0.3s linear;
      overflow: hidden;
      &:hover {
        background: #ecf2ff;
        img:hover {
          transform: scale(1.1);
        }
      }
      img {
        overflow: hidden;
        transition: all 0.2s;
      }
    }
    .ai_user {
      background: white;
      justify-content: left;
    }
    .row_title_content {
      margin-left: 15px;
      text-align: left;
    }
  }
  .col {
    width: 80%;
  }
}

.row_title_user {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    opacity: 1;
  }
}
.row_title_content {
  display: flex;
  flex-direction: column;
  .user_title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .user_content {
    color: rgb(235, 176, 46);
    font-size: 12px;
    font-weight: 400;
    flex: 0 0 auto;
    line-height: 18px;
    text-align: left;
  }
}

.row_main {
  display: flex;
  margin-top: 10px;
  align-content: center;
  justify-content: center;
  margin-left: 20px;
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
