import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "team",
          name: "team",
          redirect: "/home/team/projects",
          component: () => import("../views/team/TeamView.vue"),
          children: [
            {
              path: "projects",
              name: "projects",
              component: () => import("../views/team/TeamProjectsView.vue"),
            },
            {
              path: "manage",
              name: "manage",
              component: () => import("../views/team/TeamManageView.vue"),
            },
            {
              path: "setting",
              name: "setting",
              component: () => import("../views/team/TeamSettingView.vue"),
            },
            {
              path: "recycle",
              name: "recycle",
              component: () => import("../views/team/TeamRecycleView.vue"),
            }
          ],
        },
        {
          path: "message",
          name: "message",
          component: () => import("../views/message/MessageView.vue"),
        },
        {
          path: "chat",
          name: "chat",
          component: () => import("../views/chat/ChatView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/account/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/account/RegisterView.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
    },
  ],
});

export default router;
