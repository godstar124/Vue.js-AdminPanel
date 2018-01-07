<template>
  <div id="app">
    <my-header v-if="login.auth"></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Header from '../components/header/header.vue';
  export default {
    computed: mapState(['login']),
    components: {
      'my-header': Header
    },
    name: 'core'
  }
</script>
