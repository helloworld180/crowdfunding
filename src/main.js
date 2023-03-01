import Vue from 'vue'
import App from './App.vue'
//导入路由模块
import router from './routes.js'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
