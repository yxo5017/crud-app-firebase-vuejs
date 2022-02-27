import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hotel from '../views/Hotel.vue'
import AddIng from '../views/AddIng.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    },
    {
      path: '/adding',
      name: 'hotel',
      component: AddIng
    }
  ]
})
