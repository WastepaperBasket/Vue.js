<template>
  {{ $route.params.id }}
  <div class="container">
    <h4>안녕하세요? 상세페이지입니다.</h4>
    <h5 @click="$router.go(-1)">{{ vlog[$route.params.id].title }}</h5>
    <p>{{ vlog[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    vlog: Array, //ㅅ
  },
};
</script>

<style></style>
