import Vue from 'vue'
import Router from 'vue-router'
import Examples from './examples'
import Designer from '@/views/designer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/designer'
    },{
      path: '/designer',
      component: Designer
    },
    Examples
  ]
})
