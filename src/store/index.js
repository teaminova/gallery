import { createStore } from 'vuex';

import galleryModule from './modules/gallery/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    gallery: galleryModule,
    auth: authModule
  }
});

export default store;