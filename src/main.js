import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import uploader from 'vue-simple-uploader'

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(ElementUI)//全局使用ElementUI
Vue.use(uploader)
Vue.use(VideoPlayer)

new Vue({
  render: h => h(App),
}).$mount('#app')
