<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :Vuestagram="Vuestagram" />
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
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
      count: 0,
      Vuestagram,
    };
  },
  methods: {
    more() {
      axios
        .get(`https://detailhtml초.github.io/vue/more${this.count}.json`)
        .then((result) => {
          console.log(result.data);
          this.Vuestagram.push(result.data);
          this.count++;
        });
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
