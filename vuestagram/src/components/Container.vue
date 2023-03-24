<template>
  <div>
    <Post :Vuestagram="Vuestagram[0]" />
    <!-- <Post />
    <Post /> -->
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    Vuestagram: Array,
  },
};
</script>

<style></style>
