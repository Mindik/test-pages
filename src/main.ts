import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/MainPage.vue'

const routes = [
  { path: '/main', component: MainPage },
  { path: '/test-login', component: HelloWorld },
]

const router = createRouter({
  history: createWebHashHistory('/test-pages/'),
  routes,
})

createApp(App).use(router).mount('#app')
