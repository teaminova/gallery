<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        This page could not be found - maybe check out
        <router-link to="/gallery">Marija's artwork</router-link>.
      </p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: 'NotFound',
  components: { BaseCard }
};
</script>

<style scoped>
section {
  max-width: 60rem;
  margin: auto;
}
</style>