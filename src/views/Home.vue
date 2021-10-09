<template>
  <div>
    <Carousel />
    <h1 class="text-center font-weight-bold blue--text" color="blue darken-3">
      <div class="text-h4 font-weight-bold my-5">WELCOME TO THE e-HEALTH SYSTEM FOR VACCINE SLOT AVAILABLITY FOR COVID-19</div>
      <v-container>
        <v-row>
          <v-col xs="12" sm="12" md="6" cols="12"><Cards /></v-col>
          <v-col xs="12" sm="12" md="6" cols="12"><div class="text-body-1">Hello my name is MAHESH GAIKWAD, I created this web application for checking covid-19 vaccine slot availability.
            This application is based on VUEJS and FIREBASE. This can help users to book vaccine slot using our web portal.</div></v-col>
        </v-row>
      </v-container>
      
    </h1>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Cards from "../components/Cards.vue";

export default {
  name: "Home",

  components: {
    Carousel,
    Cards
  },
  methods: {},
  mounted() {},
};
</script>
