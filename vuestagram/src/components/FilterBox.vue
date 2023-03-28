<template>
  <div
    :class="`${filter}  filter-item`"
    :style="`background-image:url(${Image})`"
    @click="fire"
  >
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    Image: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit("필터", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  cursor: pointer;
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: antiquewhite;
  font-size: 25px;
  font-weight: 700;
  background-size: cover;
  background-position: center;
}
</style>
