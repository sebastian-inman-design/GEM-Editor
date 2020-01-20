import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './routes/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  }
]

const router = new VueRouter({
  routes,
})

export default router
