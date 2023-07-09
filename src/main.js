
import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/components/MainGame.vue';
import Auth from '@/components/AuthPage.vue';
import Login from '@/components/LoginPage.vue';
import LoggedPage from '@/components/LoggedMainGame.vue';
import RankingPage from '@/components/RankingPage.vue'

const routes = [
    {path: '/auth', component: Auth},
    {path: '/login', component: Login},
    {path: '/logged', component: LoggedPage},
    {path: '/', component: Main},
    {path: '/ranking', component: RankingPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
