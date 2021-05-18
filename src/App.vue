<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-title>Covid-19 Vaccination</v-app-bar-title>
    <v-spacer></v-spacer>
    <router-link to="/"><v-btn text>Home</v-btn></router-link>
    <router-link to="/slots"><v-btn text>Slots</v-btn></router-link>
    <router-link to="/about"><v-btn text>About</v-btn></router-link>
    <router-link to="/contact"><v-btn text>Contact</v-btn></router-link>
    
    
    </v-app-bar>





    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
