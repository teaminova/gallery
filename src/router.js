import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/home/HomePage';

import PicturesList  from '@/pages/gallery/PicturesList';
// import PictureDetails from '@/pages/gallery/PictureDetails';
// import AddPicture from '@/pages/gallery/AddPicture';
// import EditPicture from '@/pages/gallery/EditPicture';

import BioPage from '@/pages/bio/BioPage';

import ContactPage from '@/pages/contact/ContactPage';

import NotFound from '@/pages/NotFound';
// import AdminAuth from "@/pages/auth/AdminAuth";

import store from './store/index.js';

const PictureDetails = () => import('./pages/gallery/PictureDetails');
const AddPicture = () => import('./pages/gallery/AddPicture');
const EditPicture = () => import('./pages/gallery/EditPicture');
const AdminAuth = () => import('./pages/auth/AdminAuth');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/gallery', component: PicturesList },
    {
      path: '/gallery/:id',
      component: PictureDetails,
      props: true,
      children: [
        { path: 'editPic', component: EditPicture, meta: { requiresAuth: true } },
      ]
    },
    { path: '/addPic', component: AddPicture, meta: { requiresAuth: true } },
    { path: '/auth', component: AdminAuth, meta: { requiresUnauth: true } },
    { path: '/bio', component: BioPage },
    { path: '/contactInfo', component: ContactPage },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  }
  else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/gallery');
  }
  else {
    next();
  }
});

export default router;