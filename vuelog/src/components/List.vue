<template>
  <div class="container">
    <div v-for="(box, i) in vlog" :key="box">
      <p>{{ box.number }}</p>
      <div class="mt-5">
        <h5 @click="$router.push('/detail/' + i + '')">
          {{ box.title }}
        </h5>
        <!-- router style? -->
      </div>
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

<style>
h5 {
  cursor: pointer;
}
</style>
