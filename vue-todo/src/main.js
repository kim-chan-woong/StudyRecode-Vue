import Vue from 'vue'
import App from './App.vue'
// 변수 가져올 때 에는 {}로 감싸줘야함
import { store } from './store/store.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  // == el: '#app'
}).$mount('#app')
