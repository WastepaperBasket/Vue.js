<template>
  <div class="row">
    <div>
      <div class="row_title">
        <div style="margin-top: 10px">
          <h4>도영은 허위매물 ZERO 도전중!</h4>
          <p>전문가가 직접 현장확인 및 촬영환 매물이니 안심하세요 :)</p>
        </div>
      </div>
      <div class="row_title ai_user" style="top: 123px">
        <div class="row_main">
          <div class="row_title_user">
            <img src="../assets/aiphoto.png" />
          </div>
          <div class="row_title_content">
            <h1 class="user_title">AI 공인중개사 사무소</h1>
            <p class="user_content">프리미엄 Since 23.03.22</p>
          </div>
        </div>
        <button class="btn" @click="priceSort()">가격순 정렬</button>
        <button class="btn" @click="priceUp()">가격역순 정렬</button>
      </div>
    </div>

    <div class="box">
      <img src="../assets/aiconstruct.png" class="room-img" />
      <div class="img-box">
        <h4>월세 3000/250</h4>
        <p>오피스텔 · AI원플러스</p>
        <P>27층, 192m², 관리비 180만</P>
        <p>AI역세권.4월입주가능. 주거용.</p>
      </div>
    </div>

    <!-- @click="
        modal = true;
        click = i;
      " -->
    <div
      @click="$emit('openModal', i)"
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
</template>

<script>
export default {
  name: "Card",
  props: {
    room: Array,
    click: Number,
  },
  methods: {
    priceSort() {
      var money = this.room;
      money.sort(function (a, b) {
        return a.price2 - b.price2;
      });
    },
    priceUp() {
      var money = this.room;
      money.sort(function (a, b) {
        return b.price2 - a.price2;
      });
    },
  },
};
</script>

<style lang="scss">
.btn {
  width: 20%;
  margin-left: 11px;
  background: #326cf9;
  transition: all 0.2s;
  &:hover {
    opacity: 0.5;
  }
}
.container {
  display: flex;
  height: auto;
  overflow: hidden;
  .row {
    position: relative;
    top: 196px;
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
      top: 56px;
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
</style>
