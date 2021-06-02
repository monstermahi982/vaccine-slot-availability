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
        <v-col md="8" cols="12">Gaikwad</v-col>
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
import {
  required,
  maxLength,
  email,
  minLength,
} from "vuelidate/lib/validators";

export default {
  name: "Contact",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    select: { required },
    desc: { required, minLength: minLength(20), maxLength: maxLength(40) },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["VERY GOOD", "GOOD", "OKAY OKAY", "POOR"],
    desc: "",
  }),

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

  methods: {
    submit() {
      console.log(this.name + " " + this.select);
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.desc = false;
    },
  },
};
</script>