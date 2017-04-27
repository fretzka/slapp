import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import StartTidy from '@/components/StartTidy'
import Assa from '@/components/Assa'
import AssaTidy from '@/components/AssaTidy'
import Prodib from '@/components/Prodib'
import ProdibTidy from '@/components/ProdibTidy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      icon: 'fa fa-home',
      components: {
        default: Start,
        tidy: StartTidy
      }
    },
    {
      path: 'Assa',
      name: 'Assa',
      icon: 'fa fa-key',
      components: {
        default: Assa,
        tidy: AssaTidy
      }
    },
    {
      path: 'Prodib',
      name: 'Prodib',
      icon: 'fa fa-lock',
      components: {
        default: Prodib,
        tidy: ProdibTidy
      }
    }
  ]
})
