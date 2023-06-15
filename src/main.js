import { createApp } from 'vue';
import { router } from './router'

// css 
import * as bootstrap from 'bootstrap';
import './assets/scss/main.scss';

import App from './App.vue';
createApp(App).use(router).mount('#app');