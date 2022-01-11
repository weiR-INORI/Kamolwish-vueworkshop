import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Main from './pages/main.vue';
import Detail from './pages/detail.vue';

const routes = [
  { path: '/', name: 'home', component: Main },
  { path: '/device/:id', name: 'device', component: Detail },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
