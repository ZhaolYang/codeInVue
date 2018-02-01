import Vue from 'vue'
import App from './App.vue'
import codeinvue from './lib/codeInVue'

Vue.use(codeinvue);

new Vue({
  el: '#app',
  render: h => h(App)
})
