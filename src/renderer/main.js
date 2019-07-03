import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import VueRouter from "vue-router";

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);
Vue.use(CarouselPlugin);
Vue.use(VueRouter);

new VueRouter({router})
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
