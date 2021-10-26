import Vue from 'vue'

export default Vue.filter(
  'currency', val => {
    return `R$ ${val.toLocaleString()}`
  }
)