export default {
  async addPicture(context, data) {
    const pictureData = {
      id: new Date().toISOString(),
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

    // const response = await fetch('https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(pictureData)
    // });
    //
    // const responseData = await response.json();
    //
    // if (!response.ok) {
    //   // error...
    // }

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
    context.commit('deletePicture', index);
  }
};