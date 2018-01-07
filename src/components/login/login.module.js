import Vue from 'vue';
import router from '../../router';
import storage from '../../shared/storage';

export default {
  state: {
    auth: !!storage().getItem('auth-token'),
    userMessage: ''
  },
  mutations: {
    login(state) {
      state.auth = true;
      state.userMessage = '';
    },
    logout(state) {
      state.auth = false;
      state.userMessage = '';
      storage().removeItem('auth-token');
    },
    loginChangeUserMessage(state, message) {
      state.userMessage = message;
    }
  },
  actions: {
    login({commit}, credentials) {
      Vue.http.post('login', credentials).then(res => {
        if (res.status === 200) {
          commit('login');
          storage().setItem('auth-token', res.data.token);
          Vue.http.headers.common['x-auth-token'] = storage().getItem('auth-token');
          return router.push('/tournaments');
        }
        commit('loginChangeUserMessage', 'Your credentials not valid.');
      }, (e) => {
        const error = e.body ? e.body.reason : 'Server error.';
        commit('loginChangeUserMessage', error);
      });
    },
    logout({commit}) {
      commit('logout');
      return router.push('/');
    }
  }
}
