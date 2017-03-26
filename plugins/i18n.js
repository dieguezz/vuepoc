import Vue from 'vue'
import store from '~store'

Vue.prototype.$t = function (key) {
  const state = store.state.lang
  console.log(store)
  let keys = key.split('.')
  let value = state._[state.lang]
  keys.forEach((k) => {
    value = value[k]
  })
  return value
}
