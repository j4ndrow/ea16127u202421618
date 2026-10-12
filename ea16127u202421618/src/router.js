import { createRouter, createWebHistory } from 'vue-router';
import sharedRoutes from './shared/presentation/shared-routes.js';
import collectionRoutes from './collection/presentation/collection-routes.js';
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/historicalobjects', children: collectionRoutes },
        ...sharedRoutes,
    ],
});
