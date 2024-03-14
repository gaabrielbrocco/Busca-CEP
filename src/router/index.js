import { createWebHistory, createRouter } from 'vue-router'

import Cep from "../buscaCep/view/cep.vue"

const routes = [
  { path: '/', component: Cep },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router