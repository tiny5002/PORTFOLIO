import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/AppHome.vue';
import Work from '@/view/AppWork.vue';
import Contact from '@/view/AppContact.vue';
    
Vue.use(VueRouter);

const routes = [
      { 
        path: '/', 
        name: 'Home', 
        component: Home 
      },
      { 
        path: '/work', 
        name: 'Work',
        component: Work
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      }
    ];

export default routes;
