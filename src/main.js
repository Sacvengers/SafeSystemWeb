import Vue from 'vue'
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';
import * as echarts from 'echarts';
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(TDesign)
Vue.prototype.$echarts = echarts
axios.defaults.baseURL = '/api'


new Vue({
    render: h => h(App),
}).$mount('#app')

