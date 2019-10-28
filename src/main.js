import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from './axios_init';
import App from './App';
import router from './router';
import store from './store';
import Init from './init';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Init.apiLogin();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
