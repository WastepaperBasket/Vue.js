<template>
  <div>
    <div v-if="click == 0">
      <Post
        :Vuestagram="Vuestagram[i]"
        v-for="(box, i) in Vuestagram"
        :key="box"
      />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="click == 1">
      <div
        :class="selfill"
        class="upload-image"
        :style="{ backgroundImage: `url(${Image})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :Image="Image"
          v-for="filter in filter"
          :key="filter"
          :filter="filter"
          >{{ filter }}</FilterBox
        >
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="click == 2">
      <div
        :class="selfill"
        class="upload-image"
        :style="{ backgroundImage: `url(${Image})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
 하고싶은 이야기를 써주세요.</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filter from "../assets/filter.js";
export default {
  name: "Container",
  components: {
    Post,
    FilterBox,
  },
  props: {
    Vuestagram: Array,
    click: Number,
    Image: String,
  },
  data() {
    return {
      filter,
      selfill: "",
    };
  },
  // mounted() {
  //   this.emiter.on("필터", (result) => {
  //     selectFilter = this.result;
  //   });
  mounted() {
    this.emitter.on("필터", (result) => {
      console.log("Container입니다" + result);
      this.selfill = result;
    });
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 93%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
