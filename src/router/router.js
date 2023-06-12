import Main from '@/pages/MainPage';
import Posts from '@/pages/PostPage';
import About from '@/pages/AboutPage';
import PostId from '@/pages/PostId';
import CApi from '@/pages/PostPageCompositionApi';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostId
    },
    {
        path: '/capi',
        component: CApi
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory()
})

export default router;