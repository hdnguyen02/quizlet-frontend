import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Blog from "../views/Blog.vue";
import Desk from "../views/Desk.vue"
import Class from "../views/Class.vue"
import NotFound from "../views/NotFound.vue"

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
        path: "all",
        name: "AllDesk",
        component: () => import('../components/AllDesk.vue')
      },
      {
        path: "add",
        name: "AddDesk",
        component: () => import('../components/AddDesk.vue')
      },
      {
        path: ":id",
        name: "DetailDesk",
        component: () => import("../components/DetailDesk.vue"),
        children: [
          {
            path: "add-card",
            name: "AddCard",
            component: () => import("../components/AddCard.vue"),
          },
          {
            path: "study",
            name: "Study",
            component: () => import("../components/Study.vue"),
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
