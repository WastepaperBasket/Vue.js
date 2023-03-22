<template>
  <div>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용임</p>
        <button @click="modal = false">닫기</button>
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
        <div class="row_title">
          <div style="margin-top: 10px">
            <h4>도영은 허위매물 ZERO 도전중!</h4>
            <p>전문가가 직접 현장확인 및 촬영환 매물이니 안심하세요 :)</p>
          </div>
        </div>
        <div
          @click="modal = true"
          v-for="(box, i) in products"
          :key="box"
          class="box"
        >
          <img src="./assets/room1.png" class="room-img" />
          <div class="img-box">
            <h4>{{ box }}</h4>
            <p>만원</p>
            <button @click="increase(i)">허위매물신고</button>
            <span>신고수 : {{ police[i] }}</span>
            <button>상세보기</button>
          </div>
        </div>
        <div v-for="(box, i) in products" :key="box" class="box">
          <img src="./assets/room1.png" class="room-img" />
          <div class="img-box">
            <h4>{{ box }}</h4>
            <p>만원</p>
            <button @click="increase(i)">허위매물신고</button>
            <span>신고수 : {{ police[i] }}</span>
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

<script>
import KakaoMap from "./components/KakaoMap.vue";
export default {
  name: "App",
  components: {
    KakaoMap,
  },
  data() {
    return {
      modal: false,
      police: [0, 0, 0],
      menu: ["지도", "분양", "관심목록", "방내놓기", "알림", "비대면 계약"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase(i) {
      this.police[i]++;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap");

@mixin button() {
  background: #326cf9;
  color: white;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 4px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: flex;
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
    top: 130px;
    text-align: center;
    width: 30%;
    height: 170vh;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    overflow-y: scroll;
    .row_title {
      font-size: 15px;
      width: 100%;
      height: 60px;
      position: fixed;
      top: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgb(237, 237, 237);
      background: #f1f3f5;
    }
    p {
      margin-bottom: 15px;
    }
    .img-box {
      text-align: left;
    }
    .room-img {
      width: 55%;
    }
    .box {
      cursor: pointer;
      padding: 15px 5px;
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid #eee;
      transition: 0.3s linear;
      &:hover {
        background: #ecf2ff;
      }
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
  .white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
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
}

@include tablet {
  .row {
    width: 40% !important;
    height: 140vh !important;
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
    right: 400px;
  }
}

@include desktop {
  .row {
    display: none;
  }
}
</style>
