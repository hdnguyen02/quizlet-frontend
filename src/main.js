import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import axios from './axios' 
import { useUserStore } from './stores/useUserStore.js'
import { mapActions } from 'pinia'



const pinia = createPinia()
const app = createApp(App);
app.use(router)
app.use(pinia)
app.mount('#app')
app.config.globalProperties.$axios = axios

if(localStorage.getItem('token')) {
    const useUser = useUserStore()
    axios.get('api/v1/user')
    .then(() => {
        useUser.setAuthenticated(true)
    })
    .catch(() => {
        useUser.setAuthenticated(false)
    })
}



