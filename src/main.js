import Vue from 'vue'
import App from './App.vue'
import Filters from './filters/index'
import './plugins/axios'
import './plugins/vuetify'
import router from './router'
import store from './store/store'
Vue.directive(Filters)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
