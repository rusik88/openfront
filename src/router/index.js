import Vue from 'vue';
import VueRouter from 'vue-router';

const HomeComponent = () => import('../components/HomeComponent');
const DynamicComponent = () => import('../components/DynamicComponent');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '(.*)',
    name: 'dynamic',
    component: DynamicComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
