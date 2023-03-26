<template>
  <div class="menu">
    <nav>
      <div class="main_logo">
        <router-link to="/">
          <div class="main_title">
            <h2>Home</h2>
            <h2>Home</h2>
          </div>
        </router-link>
        <p>지금 결제하면 {{ amount }}% 할인</p>
      </div>
      <div class="menu_item">
        <a v-for="(hey, i) in menu" :key="hey" @click="click(i)">{{ hey }}</a>
      </div>
      <button class="menu_user">
        <span class="Login"
          >로그인
          <span></span>
          비밀번호
        </span>
      </button>

      <button class="menu_user join">
        <span class="Login"
          ><a href="/anything(.*)"> 중개사 가입 / 광고문의 </a></span
        >
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      amount: 30,
      type: Number,
    };
  },
  mounted() {
    let timer = setInterval(() => {
      this.amount--;
      if (this.amount == 0) {
        clearInterval(timer);
      }
    }, 2000);
  },
  methods: {
    click(i) {
      if (this.menu[i] == "지도") {
        this.$router.push({ path: "/" });
      } else if (this.menu[i] == "분양") {
        this.$router.push({ path: "/sales" });
      } else if (this.menu[i] == "비대면 계약") {
        this.$router.push({ path: "/recent-room" });
      }

      // else if (this.menu[i] == "관심목록") {
      // } else if (this.menu[i] == "방내놓기") {
      // } else if (this.menu[i] == "알림") {
      // }
    },
  },
  props: {
    menu: Array,
  },
};
</script>

<style lang="scss">
.main_title {
  position: relative;
  left: 60px;
}

.main_title h2 {
  color: #fff;
  font-size: 2.3em;
  position: absolute;
  transform: translate(-50%, -50%);
}

.main_title h2:nth-child(1) {
  color: transparent;
  color: #bebebe;
}

.main_title h2:nth-child(2) {
  -webkit-text-stroke: 2px #326cf9;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

@keyframes blink-effect {
  50% {
    opacity: 0;
  }
}
.menu {
  position: fixed;
  width: 100%;
  background: #fff;

  border-radius: 5px;
  margin-left: auto;
  border-bottom: 1px solid rgb(231, 231, 231);
  z-index: 100;
  .main_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      animation: blink-effect 1.4s step-end infinite;
      color: #d2201d;
      font-weight: 700;
      font-size: 18px;
      margin-left: 200px;
      text-decoration: underline;
    }
  }
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
    width: 90px;
    margin: 10px;
    height: 30px;
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
</style>
