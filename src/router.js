import { createRouter, createWebHistory } from "vue-router";

// IMPORTO I COMPONENTI
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';
import AppProjectPage from './pages/AppProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: AppProjectPage
        },
    ]
});

export { router };