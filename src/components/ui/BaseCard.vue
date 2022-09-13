<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 90rem;
  background-color: #ffffff;
}

@media (max-width: 1000px) {
  .card {
    border-radius: unset;
    width: 100%;
  }
}
</style>