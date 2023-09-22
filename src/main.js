import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import instance from './axios'

const app = createApp(App); 
app.use(router)
app.mount('#app')

app.config.globalProperties.$axios = instance
