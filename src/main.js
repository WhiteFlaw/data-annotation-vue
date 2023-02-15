import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as tf from '@tensorflow/tfjs';

Vue.config.productionTip = false
Vue.use(tf); // 静态目录是不是取不到全局内容?????

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
