<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-title>Covid-19 Vaccination</v-app-bar-title>
    <v-spacer></v-spacer>
    
    
    <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="slots" text>Slots</v-btn>
        <v-btn to="/contact" text>Contact</v-btn>
    </v-toolbar-items>

    </v-app-bar>
</template>

<script>
export default {
    name:"Navbar"
}
</script>