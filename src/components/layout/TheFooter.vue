<template>
  <section>
    <div class="admin-button" v-if="!isLoggedIn && !authRoute">
      <router-link to="/auth">Admin Login</router-link>
    </div>
    <div class="admin-button" v-if="isLoggedIn">
      <button @click="logout">Admin Logout</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    authRoute() {
      return this.$route.path == '/auth';
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/gallery');
    }
  }
}
</script>

<style scoped>
section {
  width: 100%;
  height: 4rem;
  background-color: #0b032d;
  display: flex;
  justify-content: right;
  align-items: center;
}

.admin-button button,
.admin-button a {
  text-decoration: none;
  /* color: #f391e3; */
  color: #f67e7d;
  background-color: transparent;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  margin: 0.5rem;
}

.admin-button button:hover,
.admin-button button:active,
.admin-button a:hover,
.admin-button a:active {
  border: 1px solid #f67e7d;
}
</style>