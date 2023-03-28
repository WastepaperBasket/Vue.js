import { createStore } from "vuex";
import posts from "./assets/vuestagram.js";

const store = createStore({
  state() {
    return {
      name: "Vuex",
      age: 20,

      click: false,
      likes: posts.map((post) => post.likes),
      liked: posts.map((post) => post.liked),
      heart: posts.map((post) => (post.liked ? "💖" : "")),
    };
  },
  mutations: {
    //state 꼭 여기다가 데이터만
    changeLikes(state, idx) {
      if (state.liked[idx] === false) {
        state.likes[idx]++;
        state.heart[idx] = "💖";
        state.liked[idx] = true;
      } else if (state.liked[idx] === true) {
        state.likes[idx]--;
        state.heart[idx] = "";
        state.liked[idx] = false;
      }
    },
    changePosts(state, posts) {
      state.posts = posts;
      state.likes = posts.map((post) => post.likes);
      state.liked = posts.map((post) => post.liked);
      state.heart = posts.map((post) => (post.liked ? "💖" : ""));
    },
  },
});

export default store;
