import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/About.vue')
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes
})

export default router