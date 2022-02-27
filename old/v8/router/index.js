import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LocalSchedule from '../views/LocalSchedule.vue'
import Hotel from '../views/Hotel.vue'
import Vehicle from '../views/Vehicle.vue'
import Translator from '../views/Translator.vue'
import LocalStaff from '../views/LocalStaff.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/localschedule',
      name: 'localschedule',
      component: LocalSchedule
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/translator',
      name: 'Translator',
      component: Translator
    },
    {
      path: '/localstaff',
      name: 'LocalStaff',
      component: LocalStaff
    }
  ]
})
