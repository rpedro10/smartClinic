import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/components/Login'
import Become from '@/components/Become'
import Clinic from '@/components/Clinic'
import Social from '@/components/Social'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    // Common routes
    { path: '/', name: 'About', component: Become },
    { path: '/login', component: Login },
    { path: '/become', component: Index },
    { path: '/clinic', component: Clinic },
    { path: '/admin', component: Admin },
    { path: '/social', component: Social }
  ]
})
