/*
  应用全局属性
 */
import type { ActionTree, MutationTree } from 'vuex'
import type { AppState } from '../types'
import * as storage from '@/utils/storage'
import {
  SET_LANGUAGE,
  TOGGLE_SIDEBAR,
} from '@/constants/store'

const { VUE_APP_FALLBACK_LANGUAGE = 'zh' } = process.env

export const state: AppState = {
  language: storage.getLanguage() || VUE_APP_FALLBACK_LANGUAGE,
  theme: storage.getTheme() || 'theme-default',
  sidebar: {
    isOpen: true,
    withoutAnimation: false,
  },
}

export const actions: ActionTree<AppState, unknown> = {
  // 使用 ES2015的写法，使用常量作为函数名
  [SET_LANGUAGE.action] ({ commit }, language: string) {
    storage.setLanguage(language)
    commit(SET_LANGUAGE.mutation, language)
  },

  [TOGGLE_SIDEBAR.action] ({ commit }) {
    commit(TOGGLE_SIDEBAR.mutation)
  },
}

export const mutations: MutationTree<AppState> = {
  [TOGGLE_SIDEBAR.mutation] (state) {
    state.sidebar.isOpen = !state.sidebar.isOpen
  },

  [SET_LANGUAGE.mutation] (state, language: string) {
    state.language = language
  },
}

export default {
  state,
  actions,
  mutations,
}
