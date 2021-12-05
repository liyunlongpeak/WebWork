import { createApp } from "vue"
import App from "./App.vue"
import Video from "./views/Video.vue"
import fan from "./views/fan.vue"
import life from "./views/life.vue"
const app = createApp(App)
app.component('My-video', Video)
app.component('My-fan', fan);
app.component('My-life', life)
app.mount('#app');