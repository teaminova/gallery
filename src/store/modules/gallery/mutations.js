export default {
  addPicture(state, payload) {
    state.gallery.push(payload);
  },
  setGallery(state, payload) {
    state.gallery = payload;
  },
  setFetchTimestamp(state)
  {
    state.lastFetch = new Date().getTime();
  },
  editPicture(state, payload) {
    const index = state.gallery.findIndex(
      (picture) => picture.id === payload.id
    );
    if (index !== -1) {
      state.gallery[index] = payload;
    }
  },
  deletePicture(state, id) {
    const index = state.gallery.findIndex(
      (picture) => picture.id === id
    );
    if (index !== -1) {
      state.gallery.splice(index, 1);
    }
  }
};