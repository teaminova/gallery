<template>
  <section id="selected_menu">
    <base-card class="StartHeaderBgColor">
      <div class="start_header">
        <h2>Marija's Bio</h2>
      </div>
    </base-card>
  </section>
  <div class="img-div">
    <img src="../../components/assets/artistPic.png" alt="photo of Marija">
  </div>
  <section class="biography">
    <base-card>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
export default {
  name: 'BioPage',
  components: { BaseCard }
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
  max-width: 40rem;
  text-align: center;
}
</style>