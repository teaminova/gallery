<template>
  <section>
    <div id="admin-button">
      <button>Admin settings</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
section {
  width: 100%;
  height: 5rem;
  background-color: #0b032d;
  display: flex;
  justify-content: right;
  align-items: center;
}

#admin-button button {
  text-decoration: none;
  /* color: #f391e3; */
  color: #f67e7d;
  background-color: transparent;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  margin: 0.5rem;
}

#admin-button button:hover,
#admin-button button:active {
  border: 1px solid #f67e7d;
}
</style>