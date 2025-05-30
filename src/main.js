<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import vuetify from './plugins/vuetify'
=======
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import vuetify from './plugins/vuetify'; // Assumes Vuetify plugin is properly set up
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
>>>>>>> 147bee449fe02369ba0a4d0d14ab3e31b80e97f8

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'

<<<<<<< HEAD
library.add(faHtml5, faCss3Alt, faJs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)
=======
// Use Vue Router
Vue.use(VueRouter);
>>>>>>> 147bee449fe02369ba0a4d0d14ab3e31b80e97f8

// Create and mount Vue instance
new Vue({
  router,
  vuetify,
<<<<<<< HEAD
  render: h => h(App)
}).$mount('#app')
=======
  render: h => h(App),
}).$mount('#app');
>>>>>>> 147bee449fe02369ba0a4d0d14ab3e31b80e97f8
