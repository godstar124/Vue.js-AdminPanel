<template>
  <div class="central-wrapper">
    <div>
      <h1>{{login.userMessage}}</h1>
      <form @submit="submit">
        <md-input-container md-inline>
          <md-input type="email" placeholder="email" v-model="email"></md-input>
        </md-input-container>
        <md-input-container md-inline>
          <md-input type="password" placeholder="password" v-model="password"></md-input>
        </md-input-container>
        <md-button type="submit" class="md-raised md-primary">Login</md-button>
      </form>
    </div>
  </div>
</template>

<script>
  import router from '../../router';
  import {mapState} from 'vuex';
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    created() {
      if (this.$store.state.login.auth) {
        router.push('/tournaments');
      }
    },
    computed: mapState(['login']),
    methods: {
      submit(e) {
        e.preventDefault();
        return this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
      }
    }
  }
</script>

<style lang="scss">
  .central-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
