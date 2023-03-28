<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${Vuestagram.userImage})` }"
      ></div>
      <span class="profile-name">{{ Vuestagram.name }}</span>
    </div>
    <!-- 🌟🌟🌟🌟🌟 -->
    <div
      :class="Vuestagram.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${Vuestagram.postImage})` }"
    ></div>
    <div class="post-content">
      <p class="post-likes">{{ Vuestagram.likes }} Likes</p>
      <p class="post-con">
        <strong style="margin-right: 7px">{{ Vuestagram.name }}</strong>
        {{ Vuestagram.content }}
      </p>
      <p class="date">{{ Vuestagram.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",

  props: {
    Vuestagram: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
  color: rgb(255, 255, 255, 0.8);
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.date {
  font-size: 11px;
  color: rgb(40, 40, 40);
  margin-top: -8px;
}
.post-likes {
  color: rgb(153, 17, 62);
}

.post-content > p > strong {
  color: rgba(255, 255, 255, 0.8);
}
body:before {
  content: "";
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
button {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 55px;
  font-size: 1em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  width: 100%;
  padding: 15px;

  background: transparent;
  border: none;
}
button:hover {
  background: #fff;
  color: #1aab8a;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 300ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 600ms ease all;
}
</style>
