import axios from 'axios'
import Vue from 'vue'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://stock-trade-c83f0-default-rtdb.firebaseio.com/'
    })
  }
})