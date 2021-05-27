import { guest } from '@/router/middlewares'

import Login from '@/views/Login'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: guest,
    meta: {
      title: 'Login | Querido Diário'
    }
  }
]