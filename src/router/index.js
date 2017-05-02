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
      name: 'START',
      icon: 'fa fa-home fa-2x',
      components: {
        default: Start,
        tidy: StartTidy
      }
    },
    {
      path: 'Assa',
      name: 'ASSA',
      icon: 'fa fa-amazon fa-2x',
      components: {
        default: Assa,
        tidy: AssaTidy
      }
    },
    {
      path: 'Prodib',
      name: 'PRODIB',
      icon: 'fa fa-product-hunt fa-2x',
      components: {
        default: Prodib,
        tidy: ProdibTidy
      }
    },
    {
      path: 'D12',
      name: 'D12',
      icon: 'fa fa-calculator fa-2x',
      components: {
        default: Assa,
        tidy: AssaTidy
      }
    },
    {
      path: 'SMS',
      name: 'SMS',
      icon: 'fa fa-commenting-o fa-2x',
      components: {
        default: Assa,
        tidy: Assa
      }
    }
  ]
})
