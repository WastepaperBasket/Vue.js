<template>
  <div class="menu">
    <a v-for="hey in menu" :key="hey">{{ hey }}</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="box in products" :key="box">
    <h4>{{ box }}</h4>
    <p>만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: ["Home", "Products", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  cursor: pointer;
  color: white;
  padding: 10px;
}
</style>
