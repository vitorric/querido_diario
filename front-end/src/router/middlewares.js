import store from '@/store'

let tokenLife = 3600000 * 8 // 3600000 = 60 minutes

export const authenticated = (to, from, next) => {
  if (store.getters.getAuth && !(store.getters.getAuth.timestamp && Date.now() - store.getters.getAuth.timestamp > tokenLife)) {
    return next()
  }
  
  store.dispatch('logout', true)
  return next({ name: 'login' })
}

export const guest = (to, from, next) => {
  if (!store.getters.getAuth || (store.getters.getAuth.timestamp && Date.now() - store.getters.getAuth.timestamp > tokenLife)) {
    return next()
  }

  return next({ name: 'home' })
}