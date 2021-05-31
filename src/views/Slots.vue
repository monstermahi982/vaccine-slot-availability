<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-select :state="state.states" label="Standard"></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-select :items="items" label="Standard"></v-select>
          </v-col>

          <v-col cols="12" md="4">
            <v-btn outlined block color="primary">SEARCH</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container>
      <!-- <ul>
            <li v-for="item in dataval" :key="item.message">
                {{ item.available_capacity }}
            </li>
        </ul> -->
      <v-row>
        <v-col>
          <v-card
            v-for="item in dataval"
            :key="item.center_id"
            :loading="loading"
            class="mx-auto my-12"
            max-width="100%"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-row>
              <v-col xs="6" sm="6" md="3" cols="6"
                ><v-card-text class="text-uppercase text-center blue--text">{{
                  item.state_name
                }}</v-card-text></v-col
              >
              <v-col xs="6" sm="6" md="3" cols="6">
                <v-card-text class="text-uppercase text-center blue--text">{{
                  item.district_name
                }}</v-card-text>
              </v-col>
              <v-col xs="12" sm="12" md="3" cols="12">
                <v-card-text
                  class="text-uppercase font-weight-black text-h5 text-center blue--text"
                  >{{ item.block_name }}</v-card-text
                >
              </v-col>
            </v-row>
            <v-card-title class="text-center">{{ item.name }}</v-card-title>

            <v-row>
              <v-col cols="3" class="text-center"
                ><v-btn small rounded color="primary" text
                  >Dose 1 : {{ item.available_capacity_dose1 }}</v-btn
                ></v-col
              >
              <v-col cols="3" class="text-center"
                ><v-btn small rounded color="primary" text
                  >Dose 2 : {{ item.available_capacity_dose2 }}</v-btn
                ></v-col
              >
              <v-col cols="3" class="text-center"
                ><v-btn outlined color="primary" text
                  >Available : {{ item.available_capacity }}</v-btn
                ></v-col
              >
            </v-row>

            <v-card-title>Todays's availability</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>{{ item.slots[0] }}</v-chip>

                <v-chip>{{ item.slots[1] }}</v-chip>

                <v-chip>{{ item.slots[2] }}</v-chip>

                <v-chip>{{ item.slots[3] }}</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-row>
                <v-col cols="5"
                  ><v-btn color="deep-purple lighten-2" text>
                    {{ item.vaccine }}
                  </v-btn></v-col
                >
                <v-col cols="3"
                  ><v-btn fab color="primary" class="text-center" small>{{
                    item.min_age_limit
                  }}</v-btn></v-col
                >
                <v-col cols="4"
                  ><v-btn color="blue darken-2" block>BOOK SLOT</v-btn></v-col
                >
              </v-row>
            </v-card-actions>
          </v-card>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Slots",
  data() {
    return {
      dataval: [],
      state: [],
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=363&date=31-05-2021"
        )
        .then((data) => {
          // console.log(data.data);
          this.dataval = data.data.sessions;
          // console.log(this.dataval.sessions);
        });

      this.axios
        .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then((data) => {
          // console.log(data.data);
          this.state = data.data.states;
          // console.log(this.items[1]);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>