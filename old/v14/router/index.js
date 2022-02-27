import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddIng from '../views/AddIng.vue'
import EditIng from '../views/EditIng.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/adding',
      name: 'hotel',
      component: AddIng
    },
    {
      path: '/editing/:item_slug',
      name: 'EditIng',
      component: EditIng
    }
  ]
})
