export default {
  gallery(state) {
    return state.gallery;
  },
  hasGallery(state) {
    return state.gallery && state.gallery.length > 0;
  }
};