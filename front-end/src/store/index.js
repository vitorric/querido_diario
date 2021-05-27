import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { SET_AUTH, ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from './mutation-types'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: null,
    filters: {}
  },
  mutations: {
    [SET_AUTH] (state, value) {
      state.auth = value
    },
    [ADD_FILTER] (state, param) {
      state.filters[param.key] = param.value
    },
    [REMOVE_FILTER] (state, param) {
      delete state.filters[param]
    },
    [CLEAR_FILTERS] (state) {
      state.filters = {}
    }
  },
  actions: {
    setAuth ({ commit }, value) {
      commit(SET_AUTH, { ...value, timestamp: Date.now() })
    },
    logout ({ commit }) {
      commit(SET_AUTH, null)
      commit(CLEAR_FILTERS)
      router.push('/login')
      router.go()
    },
    addFilter ({ commit }, filter) {
      if (typeof filter === 'object' && filter.key && typeof filter.value !== 'undefined') {
        commit(ADD_FILTER, filter)
      }
    },
    removeFilter ({ commit }, filter) {
      if (typeof filter === 'string') {
        commit(REMOVE_FILTER, filter)
      }
    }
  },
  getters: {
    getAuth: ({ auth }) => auth,
    getFilter: ({ filters }) => key => filters[key] || {}
  },
  plugins: [createPersistedState({
    key: 'AvaliaPerfil'
  })]
})
