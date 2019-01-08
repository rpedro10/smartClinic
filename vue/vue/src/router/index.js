import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/components/Login'
import Become from '@/components/Become'
import Clinic from '@/components/Clinic'

/** import Hello from '@/components/Hello'
import About from '@/components/About'
import NotFound from '@/components/NotFound'
*/

Vue.use(Router)

export default new Router({
  routes: [
    // Common routes
    { path: '/', name: 'About', component: Become },
    { path: '/login', component: Login },
    { path: '/become', component: Index },
    { path: '/clinic', component: Clinic }
  ]
})
