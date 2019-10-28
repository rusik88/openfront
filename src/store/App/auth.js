export default {
  state: {
    token: '',
    auth: false,
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload;
    },
  },
  actions: {
    checkToken(context, payload) {
      console.log(context, payload);
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    getAuth(state) {
      return state.auth;
    },
  },
};
