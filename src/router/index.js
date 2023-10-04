import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Blog from "../views/Blog.vue";
import Desk from "../views/Desk.vue";
import Class from "../views/Class.vue";
import NotFound from '../views/NotFound.vue'
import DeskAdd from '../components/DeskAdd.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/class",
    name: "Class",
    component: Class,
  },
  {
    path: "/desk",
    name: "Desk",
    component: Desk,
    children: [
      {
        path: "add",
        name: "DeskAdd",
        component: DeskAdd,
      },
      {
        path: ":id",
        name: "Detail",
        component: () => import("../components/DeskDetail.vue"),
        children: [
          {
            path: "add-card",
            name: "CardAdd",
            component: () => import("../components/CardAdd.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Resgiter",
    component: () => import("../views/Resgiter.vue"),
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: NotFound
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
