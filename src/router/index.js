import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import PrivacyView  from '../views/PrivacyView'
import TermsView from '../views/TermsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
    {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView
  },
  {
    path: '/tos',
    name: 'tos',
    component: TermsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
