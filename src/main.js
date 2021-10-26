import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import router from './router'
// https://stock-trade-c83f0-default-rtdb.firebaseio.com/

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
