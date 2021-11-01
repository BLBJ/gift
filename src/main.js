import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import mitt from 'mitt'
import globalComponents from "./globalComponents";
const emitter = mitt()

const app = createApp(App);
app.use(router);
app.use(globalComponents);
app.config.globalProperties.$bus = emitter;
app.mount("#app");
