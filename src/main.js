import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import uploader from 'vue-simple-uploader'

Vue.config.productionTip = false
Vue.use(ElementUI)//全局使用ElementUI
Vue.use(uploader)

new Vue({
  render: h => h(App),
}).$mount('#app')
