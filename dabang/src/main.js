import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/js/all.js";
import router from "./router.js";
import mitt from "mitt";

export const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

createApp(App).use(router).mount("#app");
