import Vue from 'vue';
import router from '../../router';

export default {
  state: {
    userMessage: ''
  },
  mutations: {
    tournamentAddChangeUserMessage(state, message) {
      state.userMessage = message;
    }
  },
  actions: {
    addTournaments({commit}, title) {
      Vue.http.post('tournament', {title}).then(res => {
        if (res.status === 200) {
          commit('addTournamentToState', res.data.tournament);
          router.push({name: 'Tournaments'});
        }
      }, () => {
        commit('tournamentAddChangeUserMessage', 'Server error.');
      });
    }
  }
}
