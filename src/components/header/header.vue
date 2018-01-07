<template>
  <div>
    <md-toolbar class="md-warn">
      <h2 class="md-title">Admin panel</h2>
      <div @click="logout">
        <md-button>Logout</md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        return this.$store.dispatch('logout');
      }
    }
  }
</script>
