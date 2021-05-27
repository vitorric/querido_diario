import { authenticated } from '@/router/middlewares'

import Layout from '@/components/layout/Main'

import Home from '@/views/site/Home'

import FormMain from '@/views/site/formularios/Main'
import FormCriar from '@/views/site/formularios/pages/Form'
import FormListar from '@/views/site/formularios/pages/List'
  
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
          title: 'Dashboard | NomeSite',
          header: {
            title: 'Home',
            breadcrumbs: ['Home']
          }
        }
      }, 
      // Perfis
      {
        path: '/perfis',
        component: FormMain,
        children: [
          {
            path: '',        
            name: 'perfil',
            component: FormListar,
            meta: {
              title: 'Perfil | NomeSite',
              header: {
                title: 'Listagem de Perfis',
                breadcrumbs: ['Perfis']
              }
            }
          },
          {
            path: 'criar',        
            name: 'perfil-criar',
            component: FormCriar,
            meta: {
              title: 'Perfil | NomeSite',
              header: {
                title: 'Criar Perfil',
                breadcrumbs: ['Perfis', 'Criar Perfil']
              }
            }
          },
          {
            path: 'editar',        
            name: 'perfil-editar',
            component: FormListar,
            meta: {
              title: 'Perfil | NomeSite',
              header: {
                title: 'Editar Perfi',
                breadcrumbs: ['Perfis', 'Editar Perfil']
              }
            }
          }
        ]
      }, 
      {
        path: '/formularios',
        component: FormMain,
        children: [
          {
            path: '',        
            name: 'formulario',
            component: FormListar,
            meta: {
              title: 'Formulário | NomeSite',
              header: {
                title: 'Listagem de Formulários',
                breadcrumbs: ['Formulários']
              }
            }
          },
          {
            path: 'criar',        
            name: 'formulario-criar',
            component: FormCriar,
            meta: {
              title: 'Formulário | NomeSite',
              header: {
                title: 'Criar Formulário',
                breadcrumbs: ['Formulários', 'Criar Formulário']
              }
            }
          },
          {
            path: 'editar',        
            name: 'formulario-editar',
            component: FormListar,
            meta: {
              title: 'Formulário | NomeSite',
              header: {
                title: 'Editar Formulário',
                breadcrumbs: ['Formulários', 'Editar Formulário']
              }
            }
          }
        ]
      }, 
      {
        path: '/trilhas',
        component: FormMain,
        children: [
          {
            path: '',        
            name: 'trilha',
            component: FormListar,
            meta: {
              title: 'Trilha | NomeSite',
              header: {
                title: 'Listagem de Trilhas',
                breadcrumbs: ['Trilhas']
              }
            }
          },
          {
            path: 'criar',        
            name: 'trilha-criar',
            component: FormCriar,
            meta: {
              title: 'Trilha | NomeSite',
              header: {
                title: 'Criar Trilha',
                breadcrumbs: ['Trilhas', 'Criar Trilha']
              }
            }
          },
          {
            path: 'editar',        
            name: 'trilha-editar',
            component: FormListar,
            meta: {
              title: 'Trilha | NomeSite',
              header: {
                title: 'Editar Trilha',
                breadcrumbs: ['Trilhas', 'Editar Trilha']
              }
            }
          }
        ]
      }
    ]
  },
]