import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/About.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            title: '关于我们'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title} - My App`;
    } else {
        document.title = 'My App';
    }
    next();
});

export default router;