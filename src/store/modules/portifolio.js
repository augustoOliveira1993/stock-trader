export default {
  state: {
    funds: 10000,
    stocks: []
  },
  mutations: {
    buyStock(state, {stockId, stockPrice, quantidade}) {
      const record = state.stocks.find(element => element.id == stockId)
      if(record) {
        record.quantidade += quantidade
      } else {
        state.stocks.push({
          id: stockId,
          quantidade: quantidade
        })
      }
      state.funds -= stockPrice * quantidade
    },
    sellStock(state, { stockId, quantidade, stockPrice}) { 
      const record = state.stocks.find(element => element.id == stockId)
      if(record.quantidade > quantidade) {
        record.quantidade -= quantidade
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }

      state.funds += stockPrice * quantidade
    },
    setPortifolio(state, portifolio) {
      state.funds = portifolio.funds
      state.stocks = portifolio.stockPortifolio ? portifolio.stockPortifolio : []
    }
  },
  actions: {
    sellStock({commit}, order) {
      commit('sellStock', order)
    }
  },
  getters: {
    stockPortifolio(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.stocks.find(element => element.id == stock.id)
        return {
          id: stock.id,
          quantidade: stock.quantidade,
          name: record.name,
          price: record.price
        }
      })
    },
    funds(state) {
      return state.funds
    }
  }
}