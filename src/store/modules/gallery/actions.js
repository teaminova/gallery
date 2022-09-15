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

    const response = await fetch('https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pictureData)
      });

    //const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('addPicture', pictureData);
  },
  async loadGallery(context) {
    const response = await fetch(
      'https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery.json'
    );
    const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    const gallery = [];

    for (const key in responseData) {
      const picture = {
        id: responseData[key].id,
        file: responseData[key].file,
        title: responseData[key].title,
        price: responseData[key].price,
        width: responseData[key].width,
        height: responseData[key].height,
        theme: responseData[key].theme,
        techniques: responseData[key].techniques,
        year: responseData[key].year,
        description: responseData[key].description
      };
      gallery.push(picture);
    }

    context.commit('setGallery', gallery);
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