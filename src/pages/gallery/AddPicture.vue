<template>
  <section>
    <base-card class="StartHeaderBgColor">
      <div class="start_header">
        <go-back></go-back>
        <h2>Add New Picture</h2>
      </div>
    </base-card>
    <base-card>
      <add-form @save-data="saveData" @cancel-add="cancelAdd"></add-form>
    </base-card>
  </section>
</template>

<script>
import AddForm from '@/components/gallery/AddForm';
import BaseCard from '@/components/ui/BaseCard';
import GoBack from '@/components/ui/GoBack';
export default {
  name: 'AddPicture',
  components: { BaseCard, AddForm, GoBack },
  methods: {
    saveData(data) {
      this.$store.dispatch('gallery/addPicture', data);
      this.$router.replace('/gallery');
      window.scrollTo(0,0);
    },
    cancelAdd() {
      this.$router.replace('/gallery');
      window.scrollTo(0,0);
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


</style>