import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import store from "./store.js";
import './registerServiceWorker'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
// npm install mitt

app.use(store).mount("#app");
