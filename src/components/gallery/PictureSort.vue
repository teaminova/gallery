<template>
  <h2>Sort by:</h2>
  <span class='filter-option'>
    <label for='newest'>Newest
      <input type='radio' name='sortStyle' id='newest' checked @change='setSorter' />
      <span class="radio_class"></span>
    </label>
    <label for='a_z'>Title (A-Z)
      <input type='radio' name='sortStyle' id='a_z' @change='setSorter' />
      <span class="radio_class"></span>
    </label>
    <label for='z_a'>Title (Z-A)
      <input type='radio' name='sortStyle' id='z_a' @change='setSorter' />
      <span class="radio_class"></span>
    </label>
    <label for='l_h'>Price (ascending)
      <input type='radio' name='sortStyle' id='l_h' @change='setSorter' />
      <span class="radio_class"></span>
    </label>
    <label for='h_l'>Price (descending)
      <input type='radio' name='sortStyle' id='h_l' @change='setSorter' />
      <span class="radio_class"></span>
    </label>
  </span>
</template>

<script>
export default {
  name: 'PictureSort',
  emits: ['change-sorter'],
  data() {
    return {
      sorter: 'newest'
    };
  },
  methods: {
    setSorter: function(event) {
      const updatedSorter = event.target.id;
      this.sorter = updatedSorter;
      this.$emit('change-sorter', updatedSorter);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
  font-size: large;
}

.filter-option {
  margin-right: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
  margin-right: 1rem;
}

@media screen and (min-width: 0px) and (max-width: 480px) {
  .filter-option { margin: 0; }
  .filter-option label { margin: 0; width: 11rem; }
}

.filter-option.active label {
  font-weight: bold;
}

label {
  display: inline;
  position: relative;
  padding-left: 30px;
  padding-bottom: 1rem;
  cursor: pointer;
}
label input {
  position: absolute;
  opacity: 0;
}
.radio_class {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}
label:hover input ~ .radio_class {
  background-color: #f67e7d;
}
label input:checked ~ .radio_class {
  background-color: #621940;
}
label .radio_class:after {
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 80%;
  background: white;
}

</style>