import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Login from "./views/Login.vue"
import Public from "./views/Public.vue"
import NotFound from "./views/status/NotFound.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Public
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes: any[] = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot!.accept('./routes.ts', ({ routes }) => {
    console.log(removeRoutes)
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

export default router