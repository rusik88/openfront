import axios from '../../includes/init_axios';

export default {
  state: {},
  mutations: {
    setAuth(state, payload) {
      localStorage.setItem('token', payload);
    },
    logout() {
      localStorage.removeItem('token');
    },
  },
  actions: {
    async login(store, payload) {
      try {
        const apiSession = await axios.post('/index.php?route=api/login', {
          key: payload.apiToken,
          username: payload.apiUser,
        });
        store.commit('setAuth', apiSession.data.api_token ? apiSession.data.api_token : '');
      } catch (e) {
        console.log('error', e);
      }
    },
  },
  getters: {
    token() {
      return localStorage.getItem('token');
    },
    getAuth() {
      if (localStorage.getItem('token')) return true;
      return false;
    },
  },
};
