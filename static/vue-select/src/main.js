import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: 'body',
  store,
  components: { App }
})
