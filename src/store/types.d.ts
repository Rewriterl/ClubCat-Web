import type { RouteRecordRaw } from 'vue-router'

export type AppState = {
  language: string
  theme: string
  sidebar: {
    isOpen: boolean
    withoutAnimation: boolean
  }
}

export type UserState = {
  token: string
}

export type ViewState = {
  visitedViews: string[]
  cachedViews: string[]
}

export type RouterState = {
  routes: RouteRecordRaw[]
  addRoutes: RouteRecordRaw[]
}

export type GlobalState = {
  app: AppState,
  user: UserState,
  view: ViewState,
  router: RouterState
}
