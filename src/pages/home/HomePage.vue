<template>
    <section class="homeBg">
      <div class="mainHomeDiv">
        <h1>MARIJA KJURCHIEVA</h1>
        <base-button link :to="viewArtworkLink">VIEW ARTWORK</base-button>
<!--        <h3><router-link to="/gallery"></router-link></h3>-->
      </div>
    </section>
  <section class="homeDetails">
    <base-card>
      <div class="container">
        <div class="imageDiv">
          <img src="../../components/assets/homePic_1.png" alt="painting">
        </div>
        <div class="paragraphDiv">
          <h3>
            Marija Kjurchieva began painting in Macedonia in 2005.
            <br>
            Her original paintings take inspiration from her everyday life.
          </h3>
        </div>
      </div>
      <div class="container">
        <div class="imageDiv">
          <img src="../../components/assets/homePic_2.png" alt="painting">
        </div>
        <div class="paragraphDiv">
          <h3>
            In these pages she offers her original acrylic, watercolor, charcoal,
            <br>
            pencil, pastel and mixed media paintings.
          </h3>
        </div>
      </div>
      <div class="container">
        <div class="imageDiv">
          <img src="../../components/assets/homePic_3.png" alt="painting">
        </div>
        <div class="paragraphDiv">
          <h3>
            Prices are based on size and subject, as well as cost of materials.
            <br>
            For more information please contact Marija.
          </h3>
          <base-button link :to="contactInfoLink">CONTACT INFO</base-button>
        </div>
      </div>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
export default {
  name: 'HomePage',
  components: {BaseButton, BaseCard},
  computed: {
    viewArtworkLink() {
      return '/gallery';
    },
    contactInfoLink() {
      return '/contactInfo';
    }
  }
};
</script>

<style scoped>
.homeBg {
  /*
  background-image: url("../../components/assets/homeBg.png");
   */
  /*
  border-bottom: 0.5rem solid #fff;
   */
  height: 30rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 60rem;
  margin: auto;
  border-radius: 1rem;
  position: sticky;
  top: 5rem;
  z-index: 0;
}

.mainHomeDiv {
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  text-align: center;
  padding-top: 8rem;
}

h1 {
  font-size: xxx-large;
  color: #0b032d;
}

.homeDetails {
  position: relative;
  max-width: 60rem;
  margin: auto;
}

.container {
  /*
  display: flex;
   */
  flex-wrap: wrap;
  justify-content: space-between;
}

.paragraphDiv{
  text-align: center;
  padding: 1rem;
}

.imageDiv {
  max-width: 100%;
  text-align: center;
  padding: 1rem;
}

.imageDiv img{
  width: 100%;
  margin: auto;
  border-radius: 0.5rem;
}

a {
  text-decoration: none;
}
</style>