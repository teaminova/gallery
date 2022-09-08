<template>
  <button v-if='!link' :class='mode'>
    <slot></slot>
  </button>
  <router-link v-else :to='to' :class='mode'>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-image: linear-gradient(#621940, #420020);
  border: 1px solid #621940;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-image: none;
  background-color: #420020;
  border-color: #420020;
}

.flat {
  background-image: none;
  background-color: transparent;
  color: #621940;
  border: none;
}

.outline {
  background-image: none;
  background-color: white;
  border-color: #420020;
  color: #420020;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-image: none;
  background-color: #ffe2e2;
  color: #420020;
}

.search {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: 0;
  background-color: #621940;
  margin-bottom: 0.25rem;
}
</style>