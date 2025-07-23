import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import FleetmanagerView from '@/views/FleetmanagerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        title: 'Dashboard',
      },
    },    
    {
      path: '/airline/fleetmanager',
      name: 'fleetmanager',
      component: FleetmanagerView,
      meta: {
        title: 'Fleet overview',
      },
    }
  ],
})

router.afterEach((to) => {
  if(!to.meta.title)
    document.title = 'YAAMS';
  else
    document.title = ("YAAMS: " + to.meta.title) || 'YAAMS';
})

export default router
