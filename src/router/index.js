import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/a",
    name: "A",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/componentA"),
  },
  {
    path: "/Index",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IndexView"),
    children: [
      {
        path: "/emp/show",
        name: "EmpShow",
        component: () => import("../views/employee/ShowView"),
      },
      {
        path: "/emp/add",
        name: "EmpAdd",
        component: () => import("../views/employee/AddView"),
      },
      {
        path: "/emp/update",
        name: "EmpUpdate",
        component: () => import("../views/employee/UpdateView"),
      },
    ],
  },
  {
    path: "/viewp",
    name: "ViewP",
    component: () => import("../views/ViewP"),
    children: [
      {
        path: "/viewa",
        name: "ViewA",
        component: () => import("../views/ViewA"),
      },
      {
        path: "/viewb",
        name: "ViewB",
        component: () => import("../views/ViewB"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
