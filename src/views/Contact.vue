<template>
  <v-container>
    <h1 class="text-center font-weight-bold blue--text" color="blue darken-3">
      FEEDBACK with <b>FIREBASE</b>
      <v-spacer></v-spacer>
      <v-row>
        <v-col md="4" cols="12">
          <v-card>
            <v-container>
              <form>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="20"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="selectErrors"
                  label="Response"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-select>
                <v-textarea
                  v-model="desc"
                  :counter="50"
                  @input="$v.desc.$touch()"
                  @blur="$v.desc.$touch()"
                  :error-messages="descErrors"
                  label="FeedBack"
                  hint="Hint text"
                ></v-textarea>

                <v-btn class="mr-4" @click="submit" color="success">
                  submit
                </v-btn>
                <v-btn @click="clear" color="red darken-1"> clear </v-btn>
              </form>
            </v-container>
          </v-card>
        </v-col>
        <v-col md="8" cols="12">
          <v-row>
            <v-col
              cols="12"
              md="6"
              sm="12"
              v-for="data in dataval"
              :key="data.key"
            >
              <v-card class="mx-auto" width="100%" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-1">{{ data.name }}</div>
                    <v-list-item-title class="text-h5 mb-1">
                      {{ data.response }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ data.desc }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-avatar size="60" color="primary" class="text-uppercase">{{
                    data.name[0]
                  }}</v-avatar>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </h1>
  </v-container>
</template>





<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import { validationMixin } from "vuelidate";
import { db } from "../firebase/firebasedb";
import {
  required,
  maxLength,
  email,
  minLength,
} from "vuelidate/lib/validators";

export default {
  name: "Contact",
  mixins: [validationMixin],

  // validations
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    select: { required },
    desc: { required, minLength: minLength(20), maxLength: maxLength(40) },
  },

  // data
  data() {
    return {
      name: "",
      email: "",
      select: null,
      items: ["VERY GOOD", "GOOD", "OKAY OKAY", "POOR"],
      desc: "",
      dataval: [],
      user: [],
    };
  },

  // form errors
  computed: {
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    descErrors() {
      const errors = [];
      if (!this.$v.desc.$dirty) return errors;
      !this.$v.desc.minLength &&
        errors.push("description must be at most 50 characters long");
      !this.$v.desc.required && errors.push("Description is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  // methods
  methods: {
    submit() {
      this.$v.$touch();
      if (
        this.name != "" &&
        this.select != null &&
        this.email != "" &&
        this.desc != ""
      ) {
        this.user = {
          name: this.name,
          email: this.email,
          response: this.select,
          desc: this.desc,
        };
        db.collection("feedbacks")
          .add(this.user)
          .then(() => {
            this.$v.$reset();
            this.name = "";
            this.email = "";
            this.select = null;
            this.desc = "";
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.desc = "";
    },
  },

  // database
  created() {
    db.collection("feedbacks").onSnapshot((snapshotChange) => {
      this.dataval = [];
      snapshotChange.forEach((doc) => {
        this.dataval.push({
          key: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          response: doc.data().response,
          desc: doc.data().desc,
        });
      });
    });
  },
};
</script>