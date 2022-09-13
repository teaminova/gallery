<template>
 <span>
   <base-button @click="goBack">Go Back</base-button>
 </span>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
export default {
  name: 'GoBack',
  components: { BaseButton },
  methods: {
    goBack() {
      this.$router.replace('/gallery');
      window.scrollTo(0,0);
    }
  }
};
</script>

<style scoped>

</style>