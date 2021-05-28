import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}/api`
axios.defaults.headers.post['Content-Type'] = 'application/json'

let config = {
  timeout: 300000,
}

const _axios = axios.create(config)

_axios.interceptors.request.use((config) => {

  if (store.getters.getAuth) {
    config.headers.common['Authorization'] = `Bearer ${store.getters.getAuth.token}`
  }

  return config
})

_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      router.redirect({ name: 'login' })
    }
    if (error.status === 403) {
      router.redirect({ name: 'error-403' })
    }
    if (error.status === 404) {
      router.redirect({ name: 'error-404' })
    }
    if (error.status === 500) {
      router.redirect({ name: 'error-500' })
    }

    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    },
  })
}

Vue.use(Plugin)

export default Plugin
