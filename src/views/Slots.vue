<template>
    <div>
        <h3><p>check the avail slots in your area</p></h3>
    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name:'Slots',
    methods:{
        getData(){
            this.axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
            .then((data) => console.log(data.data))
        }
    },
    mounted(){
        this.getData()
    }
    
}
</script>