<template>
  <div>
    <h1>{{tournament.userMessage}}</h1>
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
    computed: {
    },
    methods: {
    }
  }
</script>
