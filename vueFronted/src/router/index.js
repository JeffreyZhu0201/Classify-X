import { createRouter, createWebHistory } from 'vue-router';
import Introduction from '../views/Introduction.vue';
import Training from '../views/Training.vue';
import Classification from '../views/Classification.vue';

const routes = [
  {
    path: '/',
    redirect: '/introduction'
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/training',
    name: 'Training',
    component: Training
  },
  {
    path: '/classification',
    name: 'Classification',
    component: Classification
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;