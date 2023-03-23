<template>
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
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  props: {
    menu: Array,
  },
};
</script>

<style lang="scss">
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
</style>
