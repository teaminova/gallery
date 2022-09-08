<template>
  <section id='selected_menu'>
    <base-card class='StartHeaderBgColor'>
      <div class='start_header'>
        <h2>Marija's Bio</h2>
      </div>
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
</style>