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
export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      Vuestagram,
    };
  },
};
</script>

<style>
@import "./style.css";
</style>
