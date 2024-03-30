import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
    { path: '/', component: HelloWorld }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App)
    .use(router)
    .mount('#app')
