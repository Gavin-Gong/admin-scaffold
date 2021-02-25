import { createApp } from 'vue'
import Element from "element-plus"
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue'
import router from "./router"
import "./styles/index.scss"

const app = createApp(App)
app.use(Element, {
  size: "small"
})
app.use(router)
app.mount('#app')

export default app