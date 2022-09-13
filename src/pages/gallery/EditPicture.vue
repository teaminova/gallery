<template>
  <section>
    <base-card class="StartHeaderBgColor">
      <div class="start_header">
        <h2>Edit Picture</h2>
      </div>
    </base-card>
    <base-card>
      <edit-form @save-data="saveData" @cancel-edit="cancelEdit"></edit-form>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
import EditForm from '@/components/gallery/EditForm';
export default {
  name: 'EditPicture',
  components: { BaseCard, EditForm },
  props: ['id'],
  methods: {
    saveData(data) {
      this.$store.dispatch('gallery/editPicture', data);
      this.$router.replace('/gallery');
    },
    cancelEdit() {
      this.$router.replace('/gallery/' + this.id);
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