import Vue from 'vue';
import Vuex from 'vuex';
import url from './App/url';
import auth from './App/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { url, auth },
  state: {
  },
  mutations: {
  },
  actions: {
  },
});
