import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import AddItem from '../views/AddItem.vue'
import EditItem from '../views/EditItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/additem',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/edititem/:item_slug',
      name: 'EditItem',
      component: EditItem
    }
  ]
})
