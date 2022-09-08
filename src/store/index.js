import { createStore } from 'vuex';

import galleryModule from './modules/gallery/index.js';

const store = createStore({
  modules: {
    gallery: galleryModule
  }
});

export default store;