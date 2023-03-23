<template>
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
                <button class="button" @click="$emit('closeModal')">
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var clientKey = "test_ck_OyL0qZ4G1VO2j12BBPM3oWb2MQYg";
// eslint-disable-next-line no-unused-vars,no-undef
var tossPayments = TossPayments(clientKey);
export default {
  name: "Modal",
  props: {
    room: Array,
    modal: Boolean,
    click: Number,
  },
  methods: {
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

<style lang="scss">
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
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
