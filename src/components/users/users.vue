<template>
  <div>
    <h1>{{tournament.userMessage}}</h1>
    <router-link :to="{name: 'TournamentAdd'}">
      <md-button class="details-button md-raised">Add</md-button>
    </router-link>
    <div v-if="tournament.tournaments.length > 0">
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head md-numeric>Title</md-table-head>
            <md-table-head md-numeric>Games</md-table-head>
            <md-table-head md-numeric>Missing</md-table-head>
            <md-table-head md-numeric>Points</md-table-head>
            <md-table-head md-numeric>Scored</md-table-head>
            <md-table-head>Actions</md-table-head>
            <md-table-head>Profile</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(el, index) in tournament.tournaments" :key="index">
            <md-table-cell>{{el.id}}</md-table-cell>
            <md-table-cell md-numeric>{{el.title}}</md-table-cell>
            <md-table-cell md-numeric>{{el.games}}</md-table-cell>
            <md-table-cell md-numeric>{{el.missing}}</md-table-cell>
            <md-table-cell md-numeric>{{el.points}}</md-table-cell>
            <md-table-cell md-numeric>{{el.scored}}</md-table-cell>
            <md-table-cell>
              <md-menu md-size="2">
                <md-button class="act-button md-raised" md-menu-trigger>Actions</md-button>
                <md-menu-content>
                  <md-menu-item @selected="deleteTournament(el.id, index)">Delete</md-menu-item>
                </md-menu-content>
              </md-menu>
            </md-table-cell>
            <md-table-cell>
              <router-link :to="{name: 'TournamentsDetails', params: {id: el.id}}">
                <md-button class="details-button md-raised">Details</md-button>
              </router-link>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex';
  import router from '../../router';
  export default {
    created() {
      if (!this.$store.state.tournament.tournaments.length) {
        this.$store.dispatch('getTournaments');
      }
    },
    computed: mapState(['tournament']),
    methods: {
      deleteTournament(id, index) {
        this.$store.dispatch('deleteTournament', {id, index});
      },
      ...mapActions(['tournament'])
    }
  }
</script>

<style lang="scss" scoped>
  .details-button {
    width: 100px !important;
  }
  .act-button {
    width: 100px !important;
  }
</style>
