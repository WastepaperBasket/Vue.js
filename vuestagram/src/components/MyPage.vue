<template>
  <div class="container">
    <div style="padding: 10px">
      <h4>Celebrity List 👤</h4>
      <input
        placeholder="🔍 찾으려고 하시는 연예인을 검색해주세요"
        @input="search($event.target.value)"
      />
      <div class="post-header" v-for="(a, i) in follower" :key="i">
        <div class="profile" :style="`background-image:url(${a.image})`"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",

  setup() {
    let follower = ref([]);
    let followerOriginal = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    function search(검색어) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(검색어) != -1;
      });
      follower.value = [...newFollower];
      console.log(follower);
    }
    return { follower, search };
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  text-align: center;
}
div {
  color: black;
}
input {
  width: 64%;
  border: none;
  background: transparent;
  border-bottom: 1px solid #eee;
  padding: 15px 15px;
  transition: all 0.5s;
}
input:hover {
  border-bottom: 1px solid black;
}
input::placeholder {
  color: #eee;
}
</style>
