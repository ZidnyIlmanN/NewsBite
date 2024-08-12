import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/loginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/about',
    name: 'About Us',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/news/Lifestyle', // Menambahkan parameter dinamis ":category"
    name: 'Lifestyle',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifestyleView.vue')
  },
  {
    path: '/news/Business', // Menambahkan parameter dinamis ":category"
    name: 'Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/BusinessView.vue')
  },
  {
    path: '/news/Sport', // Menambahkan parameter dinamis ":category"
    name: 'Sport',
    component: () => import(/* webpackChunkName: "about" */ '../views/SportView.vue')
  },
  {
    path: '/news/Technology', // Menambahkan parameter dinamis ":category"
    name: 'Technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/TechnologyView.vue')
  },
  {
    path: '/news/:genre/:index',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
  },
  {
    path: '/recommendations/:genre/:index',
    name: 'Recommendations', // Mengubah nama rute ini menjadi 'Recommendations'
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

