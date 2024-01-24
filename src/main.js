import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'jquery';
import '@popperjs/core';

createApp(App).use(router).mount('#app');
