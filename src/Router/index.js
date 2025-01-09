import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ApplicationFormPage from '@/pages/ApplicationFormPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import SummaryPage from '@/pages/SummaryPage.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },

    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },

    {
        path: '/contact',
        name: 'contact',
        component: ContactPage
    },

    {
        path: '/applicationform',  
        name: 'applicationform',
        component: ApplicationFormPage
    },

    {
        path: '/summary',
        name: 'summary',
        component: SummaryPage
    },
    
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
