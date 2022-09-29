<template>
  <section id="selected_menu">
    <base-card class="StartHeaderBgColor">
      <div class="start_header">
        <h2>Marija's Bio</h2>
      </div>
    </base-card>
  </section>
  <div class="img-div">
    <img src="../../components/assets/bio/artistPhoto.jpg" alt="photo of Marija">
  </div>
  <section class="biography">
    <base-card>
      <p>
        Marija Qurchieva (born 2002) is a young artist
        who has been studying painting since she was 10 years old.
        She participated in an art colony within her primary education.
        She continued her education at the High School of Art "Lazar Lichenoski",
        where she studied in the Department of Painting.
      </p>
      <p>
        In addition to formal education,
        Marija is a member of "Atelier 49" from 2013, initially as a student with a scholarship
        and from 2018 as an assistant educator for preschool children.
      </p>
      <p>
        During her painting carrier, she participated in the project "Creative minds of the world"
        (international project) where in a competition with about 2000 artists from around the world
        she was selected in the top 200, which later entered the catalog of the project.
      </p>
      <p>
        Now, Marija is studying painting at the Faculty of Visual Arts in Skopje.
        She also has her own art studio where she gives classes to aspiring young artists.
      </p>
      <br>
      <p>
        For more information please contact Marija.
      </p>
      <div class="contactButton">
        <base-button link :to="contactInfoLink" @click="scrollToTop">CONTACT INFO</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from "@/components/ui/BaseButton";
export default {
  name: 'BioPage',
  components: { BaseCard, BaseButton },
  computed: {
    contactInfoLink() {
      return '/contactInfo';
    }
  },
  methods: {
    scrollToTop() {
      window.scroll(0,0);
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  #selected_menu { display: none; }
}

.start_header {
  display: flex;
}

.StartHeaderBgColor {
  background-color: #8888aa;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0.5rem;
}

.start_header h2 {
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  color: #ffffff;
}

.img-div {
  max-width: 30rem;
  text-align: center;
  padding: 2rem;
  padding-bottom: 0;
  margin: auto;
}

.img-div img {
  border-radius: 50%;
  max-width: 100%;
  margin: auto;
}

.biography {
  max-width: 60rem;
  margin: auto;
}

.biography p {
  margin: auto;
  padding: 1rem;
  max-width: 40rem;
  text-align: center;
  font-size: large;
  font-weight: bold;
}

p:first-of-type {
  margin-top: 0.5rem;
}

.contactButton {
  margin-bottom: 1rem;
  text-align: center;
}
</style>