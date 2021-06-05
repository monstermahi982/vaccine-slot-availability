<template>
  <div>
    <Carousel />
    <h1 class="text-center font-weight-bold blue--text" color="blue darken-3">
      WELCOME TO VACCINE SLOT AVAILABLITY FOR COVID-19
    </h1>
    <h2>{process.env.VUE_APP_ROOT_API}</h2>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",

  components: {
    Carousel,
  },
  methods: {},
  mounted() {},
};
</script>
