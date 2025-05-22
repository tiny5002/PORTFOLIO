import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import vuetify from './plugins/vuetify'; // Assumes Vuetify plugin is properly set up
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false;

// Use Vue Router
Vue.use(VueRouter);

// Create and mount Vue instance
new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
