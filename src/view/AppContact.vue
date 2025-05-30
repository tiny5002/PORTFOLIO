<template>
<<<<<<< HEAD
  <v-app id="Contactform">
    <v-container class="pa-5">
      <v-row>
        <v-col 
          cols="12" 
          md="6"
        >
          <v-img
            :src="gifSrc"
            alt="Contact me gif"
            class="gif-img mb-5"
            max-height="300"
            contain
          />
        </v-col>

        <v-col 
          cols="12" 
          md="6"
        >
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              autocomplete="name"
              required
            />

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              autocomplete="email"
              required
            />

            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
            />

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            />

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Submit
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset
            </v-btn>

            <button 
              type="button" 
              @click="resetValidation"
            >
              Reset Validation
            </button>
          </v-form>
        </v-col>
      </v-row>

      <v-snackbar v-model="snackbar">
        Form submitted successfully!
      </v-snackbar>

      <v-row class="mt-10">
        <v-col cols="12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.050957417908!2d77.49926877431979!3d13.0324270135433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d00043066f3%3A0x30e8e98d8314aad2!2sDIVYA%20PARADISE%20GIRLS%20PG!5e0!3m2!1sen!2sin!4v1748342337049!5m2!1sen!2sin"
            width="100%"
            height="500"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
=======
  <v-container class="pa-4" max-width="600">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        autocomplete="name"
        required
      />

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        autocomplete="email"
        required
      />

      <v-text-field
        v-model="contactnumber"
        :counter="10"
        :rules="contactnumberRules"
        label="Contact"
        autocomplete="contact"
        required
      />


      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      />

      <v-row class="mt-4" dense>
        <v-col cols="12" sm="4">
          <v-btn :disabled="!valid" color="success" block @click="validate">
            Submit
          </v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn color="error" block @click="reset">
            Reset
          </v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn color="warning" block @click="resetValidation">
            Clear Validation
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      Form submitted successfully!
    </v-snackbar>
  </v-container>
>>>>>>> 147bee449fe02369ba0a4d0d14ab3e31b80e97f8
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid',
    ],
<<<<<<< HEAD
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
    snackbar: false,
=======
>>>>>>> 147bee449fe02369ba0a4d0d14ab3e31b80e97f8
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
      this.valid = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
      this.valid = false;
    },
  },
};
</script>
<<<<<<< HEAD

<style scoped>
.gif-img {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.glassmorphic-form {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
=======
>>>>>>> 147bee449fe02369ba0a4d0d14ab3e31b80e97f8
