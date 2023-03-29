import { createStore } from "vuex";
import axios from "axios";
import posts from "./assets/vuestagram.js";

const store = createStore({
  state() {
    return {
      name: "Vuex",
      age: 20,
      likes: posts.map((post) => post.likes),
      liked: posts.map((post) => post.liked),
      heart: posts.map((post) => (post.liked ? "💖" : "")),
      more: {},
    };
  },
  mutations: {
    //state 꼭 여기다가 데이터만
    setMore(state, date) {
      state.more = date;
    },
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
    },
  },
  actions: {
    getDate(context) {
      axios.get("https://detailhtml.github.io/vue/more1.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
