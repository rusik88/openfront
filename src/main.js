import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import vuetify from './includes/init_vuetify';
import InitApp from './includes/init_app';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(vuetify);

InitApp.apiLogin();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
