import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: 'tabs/home'
  },
  {
    path: '/tabs/',
    component: () => import('../pages/TabsPage'),
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
      path: 'home',
      component: () => import('../pages/HomePage'),
      },
      {
        path: 'account',
        component: () => import('../pages/AccountPage'),
      },
      {
        path: 'pronos',
        component: () => import('../pages/PronosPage'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
