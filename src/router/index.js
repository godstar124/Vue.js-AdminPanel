import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login/login.vue'
import Tournaments from '../components/tournaments/tournaments.vue'
import TournamentAdd from '../components/tournament.add/tournament.add.vue'
import storage from '../shared/storage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/tournaments/:id',
      name: 'TournamentsDetails',
      component: Tournaments
    },
    {
      path: '/tournament/create',
      name: 'TournamentAdd',
      component: TournamentAdd
    }
  ]
});

router.beforeEach(function (to, from, next) {
  const excludeAuth = ['Login'];
  if (excludeAuth.includes(to.name) || storage().getItem('auth-token')) {
    return next();
  } else {
    return next('/');
  }
});

export default router;
