import { authenticated } from '@/router/middlewares'

import Layout from '@/components/layout/Main'

import Home from '@/views/user/Home'
import Daily from '@/views/user/daily/Daily'
  
export default [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    beforeEnter: authenticated,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: 'Dashboard | Querido Diário'
        }
      }, 
      {
        path: '/meu-diario',
        name: 'meu-diario',
        component: Daily,
        meta: {
          title: 'Meu Diário | Querido Diário'
        }
      }
    ]
  },
]