<template>
    <v-container>
        <!-- <ul>
            <li v-for="item in dataval" :key="item.message">
                {{ item.available_capacity }}
            </li>
        </ul> -->
        <v-row>
            <v-col>
                    
                <v-card
                v-for="item in dataval" :key="item.center_id"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>


    <v-card-title>{{ item.name }}</v-card-title>

    <v-card-text>

      <v-btn text color="primary white--text">{{ item.vaccine }}</v-btn>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Todays's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
                <v-spacer></v-spacer>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name:'Slots',
    data(){
        return {
            dataval:[]
        }
    },
    methods:{
        getData(){
            this.axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021')
            .then((data) => {
                // console.log(data.data);
                this.dataval = data.data.sessions
                console.log(this.dataval.sessions);
            })
            
        }
    },
    mounted(){
        this.getData()
    }
    
}
</script>