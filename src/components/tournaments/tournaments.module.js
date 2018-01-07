import Vue from 'vue';

export default {
  state: {
    tournaments: [],
    userMessage: ''
  },
  mutations: {
    setTournaments(state, tournaments) {
      state.tournaments = tournaments;
    },
    tournamentChangeUserMessage(state, message) {
      state.userMessage = message;
    },
    addTournamentToState(state, tournament) {
      state.tournaments.push(tournament);
    },
    deleteTournament(state, index) {
      state.tournaments.splice(index, 1);
    }
  },
  actions: {
    getTournaments({commit}) {
      Vue.http.get('tournament').then(res => {
        if (res.status === 200) {
          commit('setTournaments', res.data.tournaments);
        }
      }, () => {
        commit('tournamentChangeUserMessage', 'Server error.');
      });
    },
    deleteTournament({commit}, tournament) {
      Vue.http.delete('tournament', {body: {id: tournament.id}}).then(res => {
        if (res.status === 200) {
          commit('deleteTournament', tournament.index);
        }
      }, () => {
        commit('tournamentChangeUserMessage', 'Server error.');
      });
    }
  }
}
