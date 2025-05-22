import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/AppHome.vue';
import About from '@/view/AppAbout.vue';
import Contact from '@/view/AppContact.vue';
import Portfolio from '@/view/AppPortfolio.vue';
    
Vue.use(VueRouter);

const routes = [
      { 
        path: '/', 
        name: 'Home', 
        component: Home 
      },
      { 
        path: '/about', 
        name: 'About', 
        component: About 
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
    ];

export default routes;
