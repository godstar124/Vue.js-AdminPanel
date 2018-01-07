<template>
  <div>
    <div class="central-wrapper">
      <div>
        <h1>{{tournamentAdd.userMessage}}</h1>
        <form @submit="submit">
          <md-input-container md-inline>
            <label>Title</label>
            <md-input type="text" v-model="title"></md-input>
          </md-input-container>
          <md-button type="submit" class="md-raised md-primary">Add</md-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import router from '../../router';
  export default {
    data() {
      return {
        title: '',
      };
    },
    computed: mapState(['tournamentAdd']),
    methods: {
      submit(e) {
        e.preventDefault();
        return this.$store.dispatch('addTournaments', this.title);
      }
    }
  }
</script>
