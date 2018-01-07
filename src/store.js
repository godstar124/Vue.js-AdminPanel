import Vue from 'vue'
import Vuex from 'vuex'
import Login from './components/login/login.module';
import Tournaments from './components/tournaments/tournaments.module';
import TournamentAdd from './components/tournament.add/tournament.add.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: Login,
    tournament: Tournaments,
    tournamentAdd: TournamentAdd
  }
});
