import Vue from 'vue';
import Router from 'vue-router';

//import views
import Home from '../views/Home';

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router