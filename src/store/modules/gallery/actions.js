import { addImage, deleteImage } from "@/firebaseConfig";

export default {
  async addPicture(context, data) {
    if(data.ima === null) {
      console.log('Image data is null');
    }

    const imageRef = await addImage(data.ima);

    if (!imageRef.ok) {
      // error...
    }

    const pictureId = data.tit.split(" ").join("").replace(/[^a-zA-Z0-9 ]/g);
    const pictureData = {
      id: pictureId,
      imageUrl: imageRef,
      fileName: data.ima.name,
      title: data.tit,
      price: data.pri,
      width: data.wid,
      height: data.hei,
      theme: data.the,
      techniques: data.tec,
      year: data.yea,
      uploadDate: Date.now(),
      description: data.des
    };

    const token = context.rootGetters.token;


    const response = await fetch(
      `https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery/${pictureId}.json?auth=` +
              token,
      {
        method: 'PUT',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify(pictureData)
      });

    //const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('addPicture', {
      ...pictureData,
      id: pictureId
    });

  },
  async loadGallery(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      'https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery.json'
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const gallery = [];

    for (const key in responseData) {
      const picture = {
        id: key,
        imageUrl: responseData[key].imageUrl,
        fileName: responseData[key].fileName,
        title: responseData[key].title,
        price: responseData[key].price,
        width: responseData[key].width,
        height: responseData[key].height,
        theme: responseData[key].theme,
        techniques: responseData[key].techniques,
        year: responseData[key].year,
        uploadDate: responseData[key].uploadDate,
        description: responseData[key].description
      };
      gallery.push(picture);
    }

    context.commit('setGallery', gallery);
    context.commit('setFetchTimestamp');
  },

  async editPicture(context, data) {
    let imageRef;
    let imageName;

    if (data.ima === null) {
      imageRef = data.iURL;
      imageName = data.fil;
    }
    else {
      imageName = data.ima.name;
      imageRef = await addImage(data.ima);
      await deleteImage(data.fil);
    }

    const pictureId = data.id;
    const pictureData = {
      id: data.id,
      imageUrl: imageRef,
      fileName: imageName,
      title: data.tit,
      price: data.pri,
      width: data.wid,
      height: data.hei,
      theme: data.the,
      techniques: data.tec,
      year: data.yea,
      uploadDate: data.upl,
      description: data.des
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery/${pictureId}.json?auth=` +
              token,
      {
        method: 'PUT',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify(pictureData)
      });

    //const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('editPicture', {
      ...pictureData,
      id: pictureId
    });
  },
  async deletePicture(context, index) {
    const response1 = await fetch(
        'https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery.json'
    );
    const responseData1 = await response1.json();

    const fileName = responseData1[index].fileName;

    const token = context.rootGetters.token;

    const response = await fetch(`https://art-gallery-14576-default-rtdb.europe-west1.firebasedatabase.app/gallery/${index}.json?auth=` +
                                        token,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
      });

    //const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    await deleteImage(fileName);

    context.commit('deletePicture', index);
  }
};