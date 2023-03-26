<template name="fade">
  <transition name="fade">
    <Modal
      :room="room"
      :modal="modal"
      :click="click"
      @closeModal="modal = false"
    />
  </transition>
  <Card
    @openModal="
      modal = true;
      click = $event;
    "
    :click="click"
    :room="room"
    :modal="modal"
  />
  <div class="col">
    <div>
      <KakaoMap />
    </div>
  </div>
</template>

<script>
import room from "../assets/room.js";
import KakaoMap from "./KakaoMap.vue";
import Card from "./Card.vue";
import Modal from "./Modal.vue";
export default {
  components: {
    KakaoMap,
    Card,
    Modal,
  },
  data() {
    return {
      price: this.price,
      click: 0,
      modal: false,
      room: room,
    };
  },
};
</script>

<style lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
