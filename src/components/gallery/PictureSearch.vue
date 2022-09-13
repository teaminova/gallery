<template>
  <input
    type="text"
    placeholder="Type in a title..."
    name="search"
    @change="setSearcher">
  <base-button mode="search">Search</base-button>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
export default {
  name: 'PictureSearch',
  components: { BaseButton },
  emits: ['change-searcher'],
  data() {
    return {
      searcher: ''
    };
  },
  methods: {
    setSearcher: function(event) {
      this.searcher = event.target.value;
      this.$emit('change-searcher', this.searcher);
    }
  }
};
</script>

<style scoped>
base-button {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

input {
  padding:  0.85rem 1.5rem;
  border: 1px solid #420020;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  max-width: 10rem;
}

input:focus {
  background-color: #fff2f2;
  outline: none;
  border-color: #aa3653;
}

</style>