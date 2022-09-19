<template>
  <div id="container">
    <div id="header">
      <the-header></the-header>
    </div>
    <div id="body">
      <router-view></router-view>
    </div>
    <div id="footer">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: 'App',
  components: { TheFooter, TheHeader },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/gallery');
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
    height: 100%;
  margin: 0;

    background: #f4c2c2 url("components/assets/background_image.jpg") no-repeat fixed center center;
    -webkit-background-size: 100%;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

body {
    margin: 0;
    min-height: 100%;
  position: relative;
}

#container {
  min-height: 100%;
}

the-header, #header {
    position: sticky;
    top: 0;
    z-index: 50;
}

#body {
  padding-bottom: 5rem;
}


#footer {
    position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
}

</style>
