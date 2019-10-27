import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/Home');
const Dynamic = () => import('../components/Dynamic');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '(.*)',
    name: 'dynamic',
    component: Dynamic,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
