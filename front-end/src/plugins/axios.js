import Vue from 'vue'
import axios from 'axios'
// import store from '@/store'

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.VUE_APP_API_URL ? `${process.env.VUE_APP_API_URL}/api` : 'http://localhost:3000/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'

let config = {
  timeout: 300000,
}

const _axios = axios.create(config)

_axios.interceptors.request.use((config) => {

  let token = "958ED35DA94FCFF0CABB9B09C128E0AEF30A54B9B7DBD3C6CE846FA57E04826F3578EFEAE6A68D47899503A7D4D774683ABB98FC8C945AF6FE453F6CF305C526"

  config.headers.common['Authorization'] = `Bearer ${token}`

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
