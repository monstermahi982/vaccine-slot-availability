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
                    class="col-md-4"

                >{{ item.name }}</v-card>
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