import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(router).mount('#app')
