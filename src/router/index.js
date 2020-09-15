import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BananasIndex from '../views/BananasIndex.vue';
import BananasNew from '../views/BananasNew.vue';
import BananasShow from '../views/BananasShow.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bananas',
    name: 'BananasIndex',
    component: BananasIndex
  },
  {
    path: '/bananas/new',
    name: 'BananasNew',
    component: BananasNew
  },
  {
    path: '/bananas/:id',
    name: 'BananasShow',
    component: BananasShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
