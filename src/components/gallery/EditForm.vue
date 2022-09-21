<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !imageUrl.isValid}">
      <!-- <label for="file">Attach file here: </label> -->
      <base-button
        type="button"
        mode="outline"
        @click="onPickFile"
      >Change Image</base-button>
      <input
        type="file"
        style="display: none"
        ref="fileInput"
        accept="image/*"
        id="imageUrl"
        class="file_input"
        @blur="clearValidity('imageUrl')"
        @change="onFilePicked"
      />
      <div class='img_div'>
        <img :src="imageUrl.val" style="max-width: 30rem; max-height: 15rem;" alt="" >
      </div>
      <p v-if="!imageUrl.isValid">Image file must be attached.</p>
    </div>
    <div class="form-control" :class="{invalid: !title.isValid}">
      <label for="title">Title: </label>
      <input
        type="text"
        class="text_or_num_input"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
        autocomplete="off"/>
      <p v-if="!title.isValid">Title must not be empty.</p>
    </div>
    <div class="container">
      <div class="form-control" :class="{invalid: !price.isValid}">
        <label for="price">Price (MKD): </label>
        <input
          type="number"
          class="text_or_num_input"
          id="price"
          v-model.number="price.val"
          @blur="clearValidity('price')"
          autocomplete="off"/>
        <p v-if="!price.isValid">Please enter a valid price.</p>
      </div>
      <div class="form-control" :class="{invalid: !year.isValid}">
        <label for="year">Year: </label>
        <input
          type="number"
          class="text_or_num_input"
          id="year"
          v-model.number="year.val"
          @blur="clearValidity('year')"
          autocomplete="off"/>
        <p v-if="!year.isValid">Please enter a valid year.</p>
      </div>
      <div class="form-control" :class="{invalid: !width.isValid}">
        <label for="width">Width (cm): </label>
        <input
          type="number"
          class="text_or_num_input"
          id="width"
          v-model.number="width.val"
          @blur="clearValidity('width')"
          autocomplete="off"/>
        <p v-if="!width.isValid">Please enter a valid width.</p>
      </div>
      <div class="form-control" :class="{invalid: !height.isValid}">
        <label for="height">Height (cm): </label>
        <input
          type="number"
          class="text_or_num_input"
          id="height"
          v-model.number="height.val"
          @blur="clearValidity('height')"
          autocomplete="off"/>
        <p v-if="!height.isValid">Please enter a valid height.</p>
      </div>
      <div class="form-control" :class="{invalid: !theme.isValid}">
        <h3>Theme: </h3>
        <div>
          <label for="portrait" class="rad">Portrait
            <input
              type="radio"
              name="theme"
              id="portrait"
              value="portrait"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <div>
          <label for="still_life" class="rad">Still life
            <input
              type="radio"
              name="theme"
              id="still_life"
              value="still_life"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <div>
          <label for="landscape" class="rad">Landscape
            <input
              type="radio"
              name="theme"
              id="landscape"
              value="landscape"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <div>
          <label for="act" class="rad">Act
            <input
              type="radio"
              name="theme"
              id="act"
              value="act"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <div>
          <label for="abstract" class="rad">Abstract
            <input
              type="radio"
              name="theme"
              id="abstract"
              value="abstract"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <div>
          <label for="sketch" class="rad">Sketch
            <input
              type="radio"
              name="theme"
              id="sketch"
              value="sketch"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <div>
          <label for="other" class="rad">Other
            <input
              type="radio"
              name="theme"
              id="other"
              value="other"
              v-model="theme.val"
              @blur="clearValidity('theme')" >
            <span class="radio_class"></span>
          </label>
        </div>
        <p v-if="!theme.isValid">Please select a theme.</p>
      </div>

      <div class="form-control" :class="{invalid: !techniques.isValid}">
        <h3>Techniques: </h3>
        <div>
          <label for="acrylic" class="checkbox_label" >Acrylic
            <input
              type="checkbox"
              name="technique"
              id="acrylic"
              value="acrylic"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <div>
          <label for="charcoal" class="checkbox_label" >Charcoal
            <input
              type="checkbox"
              name="technique"
              id="charcoal"
              value="charcoal"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <div>
          <label for="watercolor" class="checkbox_label" >Watercolor
            <input
              type="checkbox"
              name="technique"
              id="watercolor"
              value="watercolor"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <div>
          <label for="pencil" class="checkbox_label" >Pencil
            <input
              type="checkbox"
              name="technique"
              id="pencil"
              value="pencil"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <div>
          <label for="pastel" class="checkbox_label" >Pastel
            <input
              type="checkbox"
              name="technique"
              id="pastel"
              value="pastel"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <div>
          <label for="mixed_media" class="checkbox_label" >Mixed media
            <input
              type="checkbox"
              name="technique"
              id="mixed_media"
              value="mixed_media"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <div>
          <label for="other1" class="checkbox_label" >Other
            <input
              type="checkbox"
              name="technique"
              id="other1"
              value="other"
              v-model="techniques.val"
              @blur="clearValidity('techniques')" >
            <span class="checkbox_class"></span>
          </label>
        </div>
        <p v-if="!techniques.isValid">Please select at least one technique.</p>
      </div>
    </div>


    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description: </label>
      <textarea
        id="description"
        rows="5"
        class="textarea_box"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>

    <p class="main_paragraph" v-if="!formIsValid">PLEASE FIX THE ERRORS ABOVE AND SUBMIT AGAIN.</p>

    <div class="controls">
      <base-button
        mode="outline"
        type="button"
        name="cancel"
        value="cancel"
        @click="cancelEdit"
      >Cancel</base-button>
      <base-button type="submit">Save Changes</base-button>
    </div>

  </form>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'EditForm',
  components: { BaseButton },
  emits: ['save-data', 'cancel-edit'],
  data() {
    return {
      //initialUrl: this.selectedPicture.imageUrl,
      imageUrl: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).imageUrl,
        isValid: true
      },
      fileName: this.$store.getters['gallery/gallery'].find(
          (picture) => picture.id === localStorage.getItem('pictureId')
      ).fileName,
      title: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).title,
        isValid: true
      },
      price: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).price,
        isValid: true
      },
      width: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).width,
        isValid: true
      },
      height: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).height,
        isValid: true
      },
      theme: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).theme,
        isValid: true
      },
      techniques: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).techniques,
        isValid: true
      },
      year: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).year,
        isValid: true
      },
      uploadDate: this.$store.getters['gallery/gallery'].find(
          (picture) => picture.id === localStorage.getItem('pictureId')
      ).uploadDate,
      description: {
        val: this.$store.getters['gallery/gallery'].find(
            (picture) => picture.id === localStorage.getItem('pictureId')
        ).description,
        isValid: true
      },
      image: null,
      formIsValid: true
    };
  },
  methods: {
    async loadGallery(refresh = false) {
      console.log("this is this.selectedPicture: "+this.selectedPicture);
      this.isLoading = true;
      try {
        await this.$store.dispatch('gallery/loadGallery', {forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please attach a valid file!');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl.val = fileReader.result
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.imageUrl.val === '') {
        this.imageUrl.isValid = false;
        this.formIsValid = false;
      }
      if (this.title.val === '') {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (!this.price.val || this.price.val < 0) {
        this.price.isValid = false;
        this.formIsValid = false;
      }
      if (!this.width.val || this.width.val < 0) {
        this.width.isValid = false;
        this.formIsValid = false;
      }
      if (!this.height.val || this.height.val < 0) {
        this.height.isValid = false;
        this.formIsValid = false;
      }
      if (this.theme.val === '') {
        this.theme.isValid = false;
        this.formIsValid = false;
      }
      if (this.techniques.val.length === 0) {
        this.techniques.isValid = false;
        this.formIsValid = false;
      }
      if (!this.year.val || this.year.val < 0) {
        this.year.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        id: this.selectedPicture.id,
        ima: this.image,
        iURL: this.imageUrl.val,
        fil: this.fileName,
        tit: this.title.val,
        pri: this.price.val,
        wid: this.width.val,
        hei: this.height.val,
        the: this.theme.val,
        tec: this.techniques.val,
        yea: this.year.val,
        upl: this.uploadDate,
        des: this.description.val
      };

      this.$emit('save-data', formData);
    },
    cancelEdit() {
      this.$emit('cancel-edit');
    }
  },
  mounted() {
    this.loadGallery();
  }
};
</script>

<style scoped>
.img_div {
  max-width: 30rem;
  max-height: 30rem;
  margin: auto;
  text-align: center;
}

.img_div img {
  margin: 0.5rem 0;
}


.form-control {
  margin: 0.5rem 0 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.container div {
  width: 14rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.file_input {
  border: none;
  background-color: #eee;
  height: 2rem;
  border-radius: 5px;
  padding: 0.25rem;
}

.text_or_num_input {
  border: none;
  background-color: #eee;
  height: 2rem;
  border-radius: 5px;
  padding: 0.5rem;
}

.textarea_box {
  border: none;
  background-color: #eee;
  border-radius: 5px;
  padding: 0.5rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #fff2f2;
  outline: none;
  border-color: #aa3653;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus,
input[type='radio']:focus {
  outline: #aa3653 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: #aa3653
}

p {
  color: #aa3653;
  text-align: center;
}

p.main_paragraph {
  font-weight: bold;
}

.invalid input,
.invalid textarea {
  border: 1px solid #aa3653;
}
.controls {
  display: flex;
  justify-content: space-between;
}

label.rad {
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-weight: normal;
}
label.rad input {
  position: absolute;
  opacity: 0;
}
.radio_class {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}
label.rad:hover input ~ .radio_class {
  background-color: #f67e7d;
}
label.rad input:checked ~ .radio_class {
  background-color: #621940;
}
label.rad .radio_class:after {
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 80%;
  background: white;
}

.checkbox_label {
  display: block;
  position: relative;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  font-weight: normal;
}

.checkbox_label input {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
  cursor: pointer;
}

.checkbox_label span {
  position: absolute;
  top: 0;
  height: 20px;
  width : 20px;
  border-radius: 20%;
  background-color : #eee;
  left: 0;
}

.checkbox_label:hover input ~ span {
  background-color: #f67e7d;
}

.checkbox_label input:checked ~ span {
  background-color: #621940;
}

.checkbox_label span:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox_label input:checked ~ span:after {
  display: block;
}

.checkbox_label span:after {
  left: 7px;
  top: 2px;
  -ms-transform : rotate( 46deg);
  transform : rotate( 46deg);
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
}

</style>