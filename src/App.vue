<template>
  <v-app>
   
   
   <!-- navbar section -->
    <Navbar />

    <!-- navbar section end -->


  <!-- main section -->
    <v-main>
      <router-view/>
    </v-main>
  <!-- main section end -->


  <!-- footer section -->
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center"
      width="100%"
    >
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>codewithmonster</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  <!-- footer section -->


  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";


export default {
  name: 'App',

  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  components: {
      Navbar
    },
};
</script>
