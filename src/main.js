// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Alert, Confirm, Toast } from "wc-messagebox";
import '../node_modules/wc-messagebox/style.css';
Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);
Vue.config.productionTip = false
import axios from "axios";
Vue.prototype.$http = axios.create({
    baseURL: ApiConfig.baseURL
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})