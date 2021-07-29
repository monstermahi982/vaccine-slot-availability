<template>
    
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Mahesh Gaikwad
        </div>
        <v-list-item-title class="headline mb-1">
          MONSTER
        </v-list-item-title>
        <v-list-item-subtitle>Join Monster community</v-list-item-subtitle>
      </v-list-item-content>

      <v-img
        max-height="100"
        max-width="100"
        src= "../assets/monster.jpeg"
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn
        rounded
        color="primary"
        href="https://github.com/monstermahi982"
        target="_blank"

      >
        Github
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
    name:"Cards"
}
</script>