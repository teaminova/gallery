export default {
  addPicture(state, payload) {
    state.gallery.push(payload);
  },
  setGallery(state, payload) {
    state.gallery = payload;
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