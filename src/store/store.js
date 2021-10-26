import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import portifolio from './modules/portifolio'
import stocks from './modules/stocks'


Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portifolio
  }  
})