import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/home/HomePage';

import PicturesList  from '@/pages/gallery/PicturesList';
import PictureDetails from '@/pages/gallery/PictureDetails';
import AddPicture from '@/pages/gallery/AddPicture';
import EditPicture from '@/pages/gallery/EditPicture';

import BioPage from '@/pages/bio/BioPage';

import ContactPage from '@/pages/contact/ContactPage';

import NotFound from '@/pages/NotFound';

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
        { path: 'editPic', component: EditPicture },
      ]
    },
    { path: '/addPic', component: AddPicture },
    { path: '/bio', component: BioPage },
    { path: '/contactInfo', component: ContactPage },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

export default router;