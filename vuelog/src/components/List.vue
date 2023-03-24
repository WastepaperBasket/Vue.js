<template>
  <div class="container">
    <div v-for="box in vlog" :key="box">
      <p>{{ box.number }}</p>
      <h5>{{ box.title }}</h5>
      <p>{{ box.content }}</p>
      <p>{{ box.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    vlog: Array,
  },
};
</script>

<style></style>
