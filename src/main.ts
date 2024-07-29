import { createApp } from "vue";
import "./assets/style.scss";
import App from "./App.vue";
import Canvas from "./components/Canvas/Canvas.vue";
import MagicBall from "./components/MagicBall/MagicBall.vue";

const app = createApp(App);

app.component("Canvas", Canvas);
app.component("MagicBall", MagicBall);
app.mount("#app");
