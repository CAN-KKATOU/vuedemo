import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "@/plugins/axiosInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(router).mount("#app");
