<template>
  <base-dialog v-if="deleteDialogIsVisible" title="Remove Picture">
    <template #default>
      <p>Are you sure you want to remove this picture from the gallery?</p>
    </template>
    <template #actions>
      <base-button @click="deletePicture">Yes</base-button>
      <base-button mode="outline" @click="showDeleteDialog">No</base-button>
    </template>
  </base-dialog>

  <section>
    <base-card class="StartHeaderBgColor">
      <div class="start_header">
        <go-back></go-back>
        <h2>Picture Details</h2>
      </div>
    </base-card>
    <base-card class="details_container">
      <!-- tuka ke stoi image file-ot -->
      <div class="img-div">
        <img alt="picture image" src="../../components/assets/placeholder_image.jpg"> // :src="imageUrl"
      </div>
      <div class="details">
        <h2>{{ title }}</h2>
        <h3>{{ price }} MKD</h3>
        <h3>{{ dimensions }}</h3>
        <h3>{{ year }}</h3>
        <base-badge type="theme" :title="theme"></base-badge>
        <base-badge
          v-for="technique in techniques"
          :key="technique"
          :type="technique"
          :title="technique"
        ></base-badge>
        <p>{{ description }}</p>
      </div>
    </base-card>
  </section>
  <section class="contactSec">
    <base-card>
      <header>
        <h2>Interested? Contact Marija!</h2>
        <div class="sendMailDiv">
          <a :href="sendMail">Send E-Mail for Selected Picture</a>
        </div>
        <div>
          <base-button link :to="contactInfoLink" mode="outline">See All Contact Info</base-button>
        </div>
      </header>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button link :to="editLink">Edit</base-button>
        <base-button mode="outline" @click="showDeleteDialog">Delete</base-button>
      </div>
    </base-card>
  </section>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from '@/components/ui/BaseBadge';
import BaseDialog from '@/components/ui/BaseDialog';
import GoBack from '@/components/ui/GoBack';
export default {
  name: 'PictureDetails',
  components: { GoBack, BaseDialog, BaseBadge, BaseButton, BaseCard },
  props: ['id'],
  data() {
    return {
      selectedPicture: null,
      selectedPicture1: this.$store.getters['gallery/gallery'].find(
        (picture) => picture.id === this.id
      ),
      deleteDialogIsVisible: false
    };
  },
  computed: {
    imageUrl() {
      return this.selectedPicture.imageUrl;
    },
    dimensions() {
      return this.selectedPicture.width + 'cm x ' + this.selectedPicture.height + 'cm';
    },
    title() {
      return this.selectedPicture.title;
    },
    price() {
      return this.selectedPicture.price;
    },
    theme() {
      return this.selectedPicture.theme;
    },
    techniques() {
      return this.selectedPicture.techniques;
    },
    year() {
      return this.selectedPicture.year;
    },
    uploadDate() {
      return this.selectedPicture.uploadDate;
    },
    description() {
      return this.selectedPicture.description;
    },
    sendMail() {
      return 'mailto:maridzasart@gmail.com' +
        '?subject=Mail for selected picture' +
        '&body=Picture title: ' + this.title + '%0d%0a%0d%0a' +
        'Please write your message below...%0d%0a%0d%0a';
    },
    contactInfoLink() {
      return '/contactInfo';
    },
    editLink() {
      return '/gallery/' + this.id + '/editPic';
    }
  },
  methods: {
    showDeleteDialog() {
      this.deleteDialogIsVisible = !this.deleteDialogIsVisible;
    },
    deletePicture() {
      this.$store.dispatch('gallery/deletePicture', this.id);
      this.$router.replace('/gallery');
      window.scrollTo(0,0);
    }
  },
  created() {
    this.selectedPicture = this.$store.getters['gallery/gallery'].find(
      (picture) => picture.id === this.id
    );
  },
  provide() {
    return {
      selectedPicture: this.selectedPicture1
    }
  }
};
</script>

<style scoped>
section {
  max-width: 60rem;
  margin: auto;
}

.start_header {
  display: flex;
}

.StartHeaderBgColor {
  background-color: #8888aa;
  margin-bottom: -3rem;
  padding-bottom: 2rem;
}

.start_header h2 {
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  color: #ffffff;
}

header {
  text-align: center;
}

.details_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.details{
  max-width: 20rem;
}

.contactSec div {
  margin-bottom: 0.5rem;
}

.sendMailDiv a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-image: linear-gradient(#621940, #420020);
  border: 1px solid #621940;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

.sendMailDiv a:hover,
.sendMailDiv a:active {
  background-image: none;
  background-color: #420020;
  border-color: #420020;
}

.controls {
  display: flex;
  justify-content: right;
}

.img-div {
  float: left;
  /*
  margin-right: 1rem;
   */
  margin: 1rem;
  width: 19rem;
  height: 19rem;
  border: 1px solid grey;
  position: relative;
}

img {
  max-width: 18.9rem;
  max-height: 18.9rem;
  margin: auto;
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
}

</style>