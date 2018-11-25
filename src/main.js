import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './assets/sass/index.sass'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
