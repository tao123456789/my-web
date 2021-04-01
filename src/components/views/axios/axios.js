import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Axios from "../views/axios/axios";

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueAxios,axios);


new Vue({
    render: h => h(Axios),
}).$mount('#axios')
