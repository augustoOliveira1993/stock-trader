import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Portifolio from './components/portifolio/Portifolio.vue'
import Stocks from './components/stocks/Stocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portifolio },
        { path: '/stocks', component: Stocks },
    ]
})