<template>
  <li>
    <!-- tuka ke stoi image file-ot -->
    <div class="img-div">
      <img alt="picture image" src="../assets/placeholder_image.jpg">
    </div>
    <h3>{{ title }}</h3>
    <h4>{{ price }} MKD</h4>
    <h4>{{ dimensions }}</h4>
    <div class="actions">
      <base-button link :to="pictureDetailsLink" @click='toTopOfPage'>View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
export default {
  name: 'PictureItem',
  components: { BaseButton },
  props: ['id', 'file', 'title', 'price', 'width', 'height'],
  computed: {
    dimensions() {
      return this.width + 'cm x ' + this.height + 'cm';
    },
    pictureDetailsLink() {
      return this.$route.path + '/' + this.id;  // /gallery/c1
    }
  },
  methods: {
    toTopOfPage() {
      window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #621940;
  border-radius: 12px;
  padding: 1rem;
  width: 20rem;
  background-color: #ffffff;
}

.img-div {
  width: 18rem;
  height: 18rem;
  border: 1px solid grey;
  position: relative;
}

img {
  max-width: 17.9rem;
  max-height: 17.9rem;
  margin: auto;
  position: absolute;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: center;
}
</style>