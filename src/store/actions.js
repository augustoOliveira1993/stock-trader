import Vue from 'vue'

export default {
  loadData({commit}) {
    Vue.prototype.$http.get('data.json')
      .then(resp => {
        const data = resp.data
        if(data) {
          commit('setStocks', data.stocks)
          commit('setPortifolio', {
            funds: data.funds,
            stockPortifolio: data.stockPortifolio
          })
        }
      })
  }
}