<template>
  <header>
    <nav>
      <h1><router-link to="/home">MARIJA KJURCHIEVA</router-link></h1>
      <ul id='menu-bar'>
        <li><router-link to="/home">HOME</router-link></li>
        <li><router-link to="/gallery">GALLERY</router-link></li>
        <li><router-link to="/bio">MARIJA'S BIO</router-link></li>
        <li><router-link to="/contactInfo">CONTACT INFO</router-link></li>
      </ul>
      <div id='hamb'>
        <base-button @click='showMenu' v-show='!menuIsVisible'>&#9776;</base-button>
        <base-button @click='showMenu' v-show='menuIsVisible'>✕</base-button>
      </div>
      <div id='hamb-menu' v-show='menuIsVisible' @click="showMenu">
        <ul>
          <li><router-link to="/home">HOME</router-link></li>
          <li><router-link to="/gallery">GALLERY</router-link></li>
          <li><router-link to="/bio">MARIJA'S BIO</router-link></li>
          <li><router-link to="/contactInfo">CONTACT INFO</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
export default {
  name: 'TheHeader',
  components: { BaseButton },
  data() {
    return {
      menuIsVisible: false
    }
  },
  methods: {
    showMenu() {
      this.menuIsVisible = !this.menuIsVisible;
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  /* background-color: #222222; */
  background-color: #0b032d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
}

header a {
  text-decoration: none;
  /* color: #f391e3; */
  color: #f67e7d;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f67e7d;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  text-align: center;
}

@media screen and (min-width: 0px) and (max-width: 1000px) {
  #menu-bar { display: none; }
}

@media screen and (min-width: 1000px) {
  #hamb, #hamb-menu { display: none; }
}

#hamb {
  width: 20%;
  text-align: right;
  padding-right: 1rem;
}

base-button {
  width: 50rem;
}

#hamb-menu {
  display: block;
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}

#hamb-menu ul {
  display: block;
  margin-bottom: 0.5rem;
  background-color: #8888aa;
}

#hamb-menu li {
  width: 100%;
  margin: 0;
}

#hamb-menu a {
  color: #621940;
  font-weight: bold;
  margin: 0.1rem 0 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  border: none;
}

#hamb-menu a:active,
#hamb-menu a:hover,
#hamb-menu a.router-link-active {
  border: none;
  background-color: #a8a8ca;
}

</style>