import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const titleRoute = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  if (titleRoute) document.title = titleRoute.meta.title

  next()
})

export default router
