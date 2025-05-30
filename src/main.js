import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import vuetify from './plugins/vuetify'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'

library.add(faHtml5, faCss3Alt, faJs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')