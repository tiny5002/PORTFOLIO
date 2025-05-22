<!-- <template>
    <div class="image">
        <img :src="contact me.gif" alt="gif">
        <form @submit.prevent="handleSubmit">
            <label>
                Name: 
            <input type="text" v-model="form.name" required />
            </label>
            <label>
                Address:  
            <input type="text" v-model="form.address" required />
            </label>
            <label>
                Contact No:  
            <input type="text" v-model="form.contact" required />
            </label>
            <label>
                Email-id:  
            <input type="text" v-model="form.emailid" required />
            </label>
            <button type="submit"> send </button>
        </form>
    </div>
</template>

<script>
import contact me from '@/assets/contact-me.gif';

export default {
    data (){
      return {
        contact-me.gif;
        form: {
          name: '', //Taking the name as input
          address: '', //Taking the address as input
          contact: '', //Taking the contact as input
          emailid: '', //Taking the emailid as input
        }
      };
    },
    methods: {
     handleSubmit(){
        console.log('Form Submitted:',this.form) //Handling the submission of the form
      }
    }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    margin: 0;
    overflow: hidden;
}

.img{
    align-items: left;
    justify-content: space-evenly;
    border-radius: round;
    padding: 5px;
    width: 150px;
}

.img:hover{
    box-shadow: black;
}


.glassmorphic-form {
    background: rgba(255, 255, 255, 0.2); /*Semi-transparent white background*/
    backdrop-filter: blur(10px); /*Adds a blue effect to the background*/
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /*Adds a subtle shadow */
    border-radius: 10px; /*Rounded Corners*/
    padding: 20px; /* Add some padding for spacing */
    border: 1px solid rgba(255, 255, 255, 0.18);  /*Adds a subtle border */
}

.glasssmorphic-form input[type=text],
.glasssmorphic-form input[type=password],
.glasssmorphic-form input[type=email] {
    background: transparent; /* Makes input fields transparent */
    border: none; /*Remove borders from input fields*/
    border-bottom: 1px solid rgba(255, 255, 255, 0.4); /*Add a subtle bottom border*/
    padding: 10px; /*Rounded corner*/
    outline: none;
    color: black;
}

.glasssmorphic-form input[type=text]:focus,
.glasssmorphic-form input[type=password]:focus,
.glasssmorphic-form input[type=email]:focus {
    border-bottom: 1px solid white;
}

.glassmorphic-form button {
    background: rgba(255, 255, 255, 0.2); /*Makes the background white*/
    color: white; /*Makes the background white*/
    padding: 10px 20px; /*Rounded corners*/
    border: none; 
    border-radius: 5px; 
    cursor: pointer; /*Adding a background to*/
    outline: none; /*Adding no outline to the border*/
    backdrop-filter: blur(5px); /*Adds a glassy affect*/
    padding: 0;
}

.glassmorphic-form button:hover{
    opacity: 0.8px;
}
</style> -->

<template>
  <v-app id="Contactform">
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
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        autocomplete="email"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
    <v-snackbar v-model="snackbar" :timeout="3000">Form submitted successfully!</v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid',
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        alert('Form is valid!');
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