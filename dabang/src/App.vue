<template>
  <div>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <div>
          <div class="room_photo">
            <div class="photo">
              <div class="big_photo">
                <img :src="room[click].image" />
              </div>
              <img :src="room[click].image2" />
              <img :src="room[click].image3" />
              <img :src="room[click].image4" style="margin-top: 8px" />
              <img :src="room[click].image5" style="margin-top: 8px" />
            </div>
          </div>
          <div class="footer">
            <div class="footer_main">
              <div class="price_info">
                <div style="width: 90%">
                  <h1>INFORMATION</h1>
                  <div class="price_goods">
                    <h3>
                      amount
                      <h4>{{ room[click].price }}</h4>
                    </h3>
                    <h3 style="display: flex; flex-direction: column">
                      More information
                      <p>
                        {{ room[click].title }}<br />
                        {{ room[click].content }}
                      </p>
                    </h3>
                    <h3>
                      option
                      <P>{{ room[click].content2 }}</P>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="price_box">
                <h3>AI 공인중개 사무소</h3>
                <div class="price_style">
                  <ul>
                    <li><i class="fas fa-house-user"></i><span>원룸</span></li>
                    <li>
                      <i class="fas fa-angle-double-up"></i><span>23.14㎡</span>
                    </li>
                  </ul>
                  <ul style="margin-left: 55px">
                    <li>
                      <i class="fas fa-arrows-alt-h"></i><span>23.14㎡</span>
                    </li>
                    <li>
                      <i class="fas fa-address-card"></i> <span> 3만 원</span>
                    </li>
                  </ul>
                </div>
                <div class="select">
                  <section class="test">
                    <input
                      type="radio"
                      name="shop"
                      id="select"
                      value="1000000000000"
                      v-model="price"
                    />
                    <label for="select">1,000,000,000,000 $</label>

                    <input
                      type="radio"
                      name="shop"
                      id="select2"
                      value="2000000000000"
                      v-model="price"
                    />
                    <label for="select2">2,000,000,000,000 $</label>
                    <!-- <div v-on:click="PaymentBtn('카드')">카드결제</div>
                  <div v-on:click="PaymentBtn('가상계좌')">가상계좌</div>
                  <div v-on:click="PaymentBtn('계좌이체')">계좌이체</div>
                  <div v-on:click="PaymentBtn('휴대폰')">휴대폰</div> -->
                  </section>
                </div>
                <div class="wrap" style="margin-top: 11px; margin-bottom: 15px">
                  <button
                    class="payment-button button2"
                    v-on:click="PaymentBtn('계좌이체')"
                  >
                    BUY
                  </button>
                </div>
                <div class="wrap">
                  <button class="button" @click="modal = false">CLOSE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="menu">
      <nav>
        <div class="main_logo">
          <img
            src="data:image/png;base64,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"
          />
        </div>
        <div class="menu_item">
          <a v-for="hey in menu" :key="hey">{{ hey }}</a>
        </div>
        <button class="menu_user">
          <span class="Login"
            >로그인
            <span></span>
            비밀번호
          </span>
        </button>

        <button class="menu_user join">
          <span class="Login"> 중개사 가입/광고문의 </span>
        </button>
      </nav>
    </div>

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

export default {
  name: "App",
  components: {
    KakaoMap,
  },
  data() {
    return {
      price: this.price,
      click: 0,
      modal: false,
      menu: ["지도", "분양", "관심목록", "방내놓기", "알림", "비대면 계약"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
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
        customerName: "뇌손실",
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
.select {
  display: flex;
  flex-direction: column;
}
.test {
  display: flex;
  flex-direction: column;
}
.select input[type="radio"] {
  display: none;
}
.select input[type="radio"] + label {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #333;
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
}
.select input[type="radio"] + label {
  background-color: #fff;
  color: #333;
  margin-bottom: 7px;
}
.select input[type="radio"]:checked + label {
  background-color: #333;
  color: #fff;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  @include button2;
}
.button2 {
  @include button2;
  &:hover {
    background-color: #e11299;
    box-shadow: 0px 15px 20px rgba(225, 18, 153, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
}
.button:hover {
  background-color: #3e54ac;
  box-shadow: 0px 15px 20px rgba(62, 84, 172, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

.menu {
  position: fixed;
  width: 100%;
  background: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-left: auto;
  border-bottom: 1px solid rgb(231, 231, 231);
  z-index: 100;
}
.menu {
  a {
    cursor: pointer;
    padding: 10px;
    transition: 0.2s all;
  }
  nav {
    display: flex;
  }
  img {
    width: 120px;
    margin: 10px;
    height: 40px;
    cursor: pointer;
    align-items: center;
  }
}
.menu_item {
  align-items: center;
  margin-left: auto;
  display: flex;
  flex: 0 0 auto;
}
.menu_item {
  a:hover {
    color: #88c5fd;
  }
}
.menu_user {
  border: 0;
  background: transparent;
  cursor: pointer;
  .Login {
    border: 1px solid rgb(223, 223, 223);
    height: 40px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    span {
      display: block;
      margin: 0px 14px;
      width: 1px;
      height: 14px;
      background-color: rgb(223, 223, 223);
      position: relative;
      top: 1px;
    }
  }
}
.join {
  margin-left: 10px;
  margin-right: 15px;
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

.black-bg {
  text-align: center;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  justify-content: center;
  display: flex;
  .white-bg {
    width: 75%;
    background: white;
    border-radius: 8px;
    padding: 20px;
    img {
      width: 80px;
      height: 80px;
    }
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

.photo {
  width: 100%;
  height: 440px;
  margin-left: 90px;
  position: relative;
  overflow: hidden;
  img {
    width: 288px !important;
    height: 216px !important;
    float: left;
    position: relative;
    margin-left: 9px;
    overflow: hidden;
    transition: all 0.2s;
  }
}
.big_photo {
  width: 586px;
  height: 440px;
  float: left;
  position: relative;
  overflow: hidden;
  img {
    width: 100% !important;
    height: 440px !important;

    transition: all 0.5 ease 0s;
    &:hover {
      transform: scale(1.1);
    }
  }
}

.footer {
  padding-top: 40px;
  .footer_main {
    display: flex;
    margin: 0 auto;
    padding: 0 10px;
    width: 1200px;
    .price_info {
      width: 70%;
      text-align: left;
      h1 {
        font-size: 25px;
        margin-bottom: 30px;
        color: rgba($color: #000000, $alpha: 0.6);
      }
      .price_goods {
        line-height: 2;
        h4 {
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          font-weight: 300;
          font-size: 16px;
          color: rgba($color: #000000, $alpha: 0.6);
        }
        h3 {
          text-transform: uppercase;
        }
        p {
          color: rgba($color: #000000, $alpha: 0.6);
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 300;
          border-bottom: 1px solid #eee;
        }
      }
    }
    .price_box {
      width: 360px;
      padding: 32px;
      background: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
      border: 1px solid rgb(223, 223, 223);
      border-radius: 2px;
      position: relative;
      .buy {
        background: tomato;
      }
      button {
        width: 90%;
      }
      h3 {
        margin: 10px 0px 20px 0px;
        text-align: left;
      }
    }
  }
  ul {
    list-style-type: none;
  }
  .price_style {
    display: flex;
    flex-direction: unset;
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      > li {
        font-size: 16px;
        margin-bottom: 12px;
        span {
          margin-left: 6px;
        }
      }
    }
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
}

@include desktop {
  .row {
    display: none;
  }
}
</style>
