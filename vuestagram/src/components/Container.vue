<template>
  <div>
    <Post
      :Vuestagram="Vuestagram[i]"
      v-for="(box, i) in Vuestagram"
      :key="box"
    />
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
