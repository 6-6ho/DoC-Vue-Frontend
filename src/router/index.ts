import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BoardRoutes from '@/board/router/BoardRoutes'
import ProductRoutes from '@/product/router/ProductRoutes'
import HomeRoutes from '@/home/router/HomeRoutes'
import AccountRoutes from '@/account/router/AccountRoutes'
import AuthenticationRoutes from '@/authentication/router/AuthenticationRoutes'
import ReportRoutes from '@/report/router/ReportRoutes'
import ReviewRoutes from '@/review/router/ReviewRoutes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  ...HomeRoutes,
  ...BoardRoutes,
  ...ProductRoutes,
  ...AccountRoutes,
  ...AuthenticationRoutes,
  ...ReportRoutes,
  ...ReviewRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
