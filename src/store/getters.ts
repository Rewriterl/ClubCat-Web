import type { GetterTree } from 'vuex'
import type { GlobalState } from './types'

const getters: GetterTree<GlobalState, unknown> = {
  language: state => state.app.language,
  theme: state => state.app.theme,
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  // router
  routes: state => state.router.routes,
  visitedViews: state => state.view.visitedViews,
  cachedViews: state => state.view.cachedViews,
}

export default getters
