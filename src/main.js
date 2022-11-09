import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import components from "@/components/UI";
import { plugin, defaultConfig } from "@formkit/vue";

const app = createApp(App);

components.forEach((component) => {
   app.component(component.name, component);
});

app.use(store).use(router).use(plugin, defaultConfig).mount("#app");
