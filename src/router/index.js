import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index';
import hot from "../pages/hot";

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/index',
        name: 'index',
        component: index,
        children: [{
            path: "hot",
            name: "hot",
            component: hot
        }]
    }, {
        path: "/",
        redirect: { name: "hot" }
    }]
})