import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CityWeather from '../views/CityWeather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/weather/:city',
    component: CityWeather
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
