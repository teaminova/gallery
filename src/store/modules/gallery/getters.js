export default {
  gallery(state) {
    return state.gallery;
  },
  hasGallery(state) {
    return state.gallery && state.gallery.length > 0;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  }
};