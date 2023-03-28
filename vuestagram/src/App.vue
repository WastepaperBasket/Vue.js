<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="click == 1" @click="click++">Next</li>
      <li v-if="click == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :Vuestagram="Vuestagram"
    :click="click"
    :Image="Image"
    @write="작성한글 = $event"
  />

  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Vuestagram from "./assets/vuestagram.js";
import axios from "axios";
export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      click: 0,
      count: 0,
      Vuestagram,
      Image: "",
      작성한글: "",
      selfill: "",
    };
  },
  mounted() {
    this.emitter.on("필터", (result) => {
      console.log("App.vue 입니다" + result);
      this.selfill = result;
    });
  },
  methods: {
    more() {
      axios
        .get(`https://detailhtml.github.io/vue/more${this.count}.json`)
        .then((result) => {
          console.log(result.data);
          this.Vuestagram.push(result.data);
          this.count++;
        });
    },

    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.Image = url;
      this.click++;
    },
    publish() {
      var myVue = {
        name: "Park DoYoung",
        userImage: "https://t1.daumcdn.net/cfile/tistory/992B1F335A12A45C11",
        postImage: this.Image,
        likes: 361,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.selfill,
      };
      this.Vuestagram.unshift(myVue);
      this.click = 0;
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
