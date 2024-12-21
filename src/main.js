import Vue from 'vue'
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';
import * as echarts from 'echarts';
import App from './App.vue'
import axios from "axios";
import {Buffer} from 'buffer';
import process from 'process';
//引入组件库
import jvuewheel from '@jyeontu/jvuewheel'
//引入样式
import '@jyeontu/jvuewheel/lib/jvuewhell.css'


Vue.config.productionTip = false
Vue.use(TDesign)
Vue.use(jvuewheel);
Vue.prototype.$echarts = echarts
axios.defaults.baseURL = '/api'
global.Buffer = Buffer;
global.process = process;

new Vue({
    render: h => h(App),
}).$mount('#app')

