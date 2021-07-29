<template>
  <div>
    <!-- select -->
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            :items="state"
            item-text="state"
            item-value="id"
            label="State"
            persistent-hint
            return-object
            single-line
            v-on:change="onshow"
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            :items="district"
            item-text="districts"
            item-value="id"
            label="Districts"
            persistent-hint
            return-object
            single-line
            v-on:change="ondetail"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center" v-show="loader">
      <v-progress-circular indeterminate color="red"></v-progress-circular>
    </div>
    <!-- select end -->

    <!-- card -->
    <v-container>
      <v-row>
        <v-col>
          <v-card
            v-for="item in dataval"
            :key="item.center_id"
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
                  class="
                    text-uppercase
                    font-weight-black
                    text-h5 text-center
                    blue--text
                  "
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
                  ><v-btn color="blue darken-2" block href="https://selfregistration.cowin.gov.in/" target="_blank">BOOK SLOT</v-btn></v-col
                >
              </v-row>
            </v-card-actions>
          </v-card>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
    <!-- card end -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import moment from "moment";
Vue.prototype.moment = moment;

export default {
  name: "Slots",
  data() {
    return {
      dataval: [],
      state: [],
      district: [],
      loader: false,
    };
  },
  methods: {
    getStates() {
      this.axios
        .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then((data) => {
          for (var i = 0; i < data.data.states.length; i++) {
            var value = {
              id: data.data.states[i].state_id,
              state: data.data.states[i].state_name,
            };
            this.state.push(value);
          }
        });
    },
    onshow(e) {
      this.dataval = [];
      this.axios
        .get(
          "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + e.id
        )
        .then((data) => {
          for (var i = 0; i < data.data.districts.length; i++) {
            var disValue = {
              id: data.data.districts[i].district_id,
              districts: data.data.districts[i].district_name,
            };
            this.district.push(disValue);
          }
        });
    },
    ondetail(e) {
      this.loader = true;
      this.axios
        .get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${
            e.id
          }&date=${moment(new Date()).format("DD-MM-YYYY")}`
        )
        .then((data) => {
          for (let i = 0; i < data.data.sessions.length; i++) {
            if (data.data.sessions[i].available_capacity_dose1 > 0) {
              this.dataval.push(data.data.sessions[i]);
            }
          }

          this.loader = false;
          this.district = [];
          this.state = [];
          this.getStates();
        });
    },
  },
  mounted() {
    this.getStates();
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>