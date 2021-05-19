<template>
  <v-app>
   
   
   <!-- navbar section -->
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
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  <!-- footer section -->


  </v-app>
</template>

<script>

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
};
</script>
