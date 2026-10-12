export default [
    { path: '/home', name: 'home', component: () => import('./views/home.vue') },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('./views/page-not-found.vue'),
    },
];
