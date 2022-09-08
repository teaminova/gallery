export default {
  addPicture(context, data) {
    const pictureData = {
      id: 'c8',
      file: data.fil,
      title: data.tit,
      price: data.pri,
      width: data.wid,
      height: data.hei,
      theme: data.the,
      techniques: data.tec,
      year: data.yea,
      description: data.des
    };

    context.commit('addPicture', pictureData);
  },
  editPicture(context, data) {
    const pictureData = {
      id: data.id,
      file: data.fil,
      title: data.tit,
      price: data.pri,
      width: data.wid,
      height: data.hei,
      theme: data.the,
      techniques: data.tec,
      year: data.yea,
      description: data.des
    };

    context.commit('editPicture', pictureData);
  },
  deletePicture(context, index) {
    const id = index;

    context.commit('deletePicture', id);
  }
};