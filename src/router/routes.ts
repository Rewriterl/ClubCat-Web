import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'
import Redirect from '@/components/view/common/redirect.vue'
import NotFound from '@/components/view/common/not-found.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    meta: {
      hidden: true,
    },
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => Redirect,
      },
    ],
  },

  {
    path: '/not-found',
    meta: {
      hidden: true,
    },
    component: () => NotFound,
  },

  {
    path: '/sign-in',
    name: 'SignIn',
    meta: {
      hidden: true,
    },
    component: () => import('@/components/view/sign-in/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {},
        component: () => import('@/components/view/dashboard/index.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)',
    redirect: '/not-found',
    meta: {
      hidden: true,
    },
  },
]

export default routes
