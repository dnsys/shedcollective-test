<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Shed Collective</span>
        <span class="font-weight-light"> (Test task)</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content fill-height>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
