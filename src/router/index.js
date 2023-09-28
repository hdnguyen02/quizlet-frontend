import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Blog from '../views/Blog.vue'
import Desk from '../views/Desk.vue'
import Class from '../views/Class.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/class',
    name: 'Class',
    component: Class
  },
  {
    path: '/desk',
    name: 'Desk',
    component: Desk,
    children: [
      {
        path: 'add',
        name: 'DeskAdd', 
        component: () => import('../components/DeskAdd.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register', 
    name: 'Resgiter', 
    component: () => import('../views/Resgiter.vue')
  }
  
  
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router