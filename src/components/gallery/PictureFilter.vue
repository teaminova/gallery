<template>
  <div class="container1">
    <div>
      <h2>Price (MKD):</h2>
      <span class="filter-option">
        <label for="minPrice">From: </label>
        <input
          type="number"
          id="minPrice"
          min="0"
          max="1000000000"
          placeholder="min"
          size="10"
          v-model='filters.minPrice'
          @change="setValueFilter"
          class="number_input"
        />
      </span>
      <span class="filter-option">
      <label for="maxPrice">To: </label>
        <input
          type="number"
          id="maxPrice"
          min="0"
          max="1000000000"
          placeholder="max"
          size="10"
          v-model='filters.maxPrice'
          @change="setValueFilter"
          class="number_input"
        />
      </span>
      <br><br>
    </div>
    <div>
      <h2>Width (cm):</h2>
      <span class="filter-option">
        <label for="minWidth">From: </label>
        <input
          type="number"
          id="minWidth"
          min="0"
          max="1000000000"
          placeholder="min"
          size="10"
          v-model='filters.minWidth'
          @change="setValueFilter"
          class="number_input"
        />
      </span>
      <span class="filter-option">
        <label for="maxWidth">To: </label>
        <input
          type="number"
          id="maxWidth"
          min="0"
          max="1000000000"
          placeholder="max"
          size="10"
          v-model='filters.maxWidth'
          @change="setValueFilter"
          class="number_input"
        />
      </span>
      <br><br>
    </div>
    <div>
      <h2>Height (cm):</h2>
      <span class="filter-option">
        <label for="minHeight">From: </label>
        <input
          type="number"
          id="minHeight"
          min="0"
          max="1000000000"
          placeholder="min"
          size="10"
          v-model='filters.minHeight'
          @change="setValueFilter"
          class="number_input"
        />
      </span>
      <span class="filter-option">
        <label for="maxHeight">To: </label>
        <input
          type="number"
          id="maxHeight"
          min="0"
          max="1000000000"
          placeholder="max"
          size="10"
          v-model='filters.maxHeight'
          @change="setValueFilter"
          class="number_input"
        />
      </span>
      <br><br>
    </div>
  </div>


  <h2>Technique:</h2>
  <div class="container2">
    <span class="filter-option">
      <label for="acrylic" class="checkbox_label" >Acrylic
        <input
          type="checkbox"
          id="acrylic"
          checked
          v-model='filters.acrylic'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
    <span class="filter-option">
      <label for="charcoal" class="checkbox_label" >Charcoal
        <input
          type="checkbox"
          id="charcoal"
          checked
          v-model='filters.charcoal'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
    <span class="filter-option">
      <label for="watercolor" class="checkbox_label" >Watercolor
        <input
          type="checkbox"
          id="watercolor"
          checked
          v-model='filters.watercolor'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
    <span class="filter-option">
      <label for="pencil" class="checkbox_label" >Pencil
        <input
          type="checkbox"
          id="pencil"
          checked
          v-model='filters.pencil'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
    <span class="filter-option">
      <label for="pastel" class="checkbox_label" >Pastel
        <input
          type="checkbox"
          id="pastel"
          checked
          v-model='filters.pastel'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
    <span class="filter-option">
      <label for="mixed_media" class="checkbox_label" >Mixed media
        <input
          type="checkbox"
          id="mixed_media"
          checked
          v-model='filters.mixed_media'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
    <span class="filter-option">
      <label for="other" class="checkbox_label" >Other
        <input
          type="checkbox"
          id="other"
          checked
          v-model='filters.other'
          @change="setFilter" />
        <span class="checkbox_class"></span>
      </label>
    </span>
  </div>


</template>

<script>
export default {
  name: 'PictureFilter',
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        minPrice: 0,
        maxPrice:1000000000,
        minWidth: 0,
        maxWidth: 1000000000,
        minHeight: 0,
        maxHeight: 1000000000,
        acrylic: true,
        charcoal: true,
        watercolor: true,
        pencil: true,
        pastel: true,
        mixed_media: true,
        other: true
      }
    };
  },
  created() {
    if (this.$route.query) {
      this.filters = {
        minPrice: parseInt(this.$route.query.minPrice || this.filters.minPrice, 10),
        maxPrice: parseInt(this.$route.query.maxPrice || this.filters.maxPrice, 10),
        minWidth: parseInt(this.$route.query.minWidth || this.filters.minWidth, 10),
        maxWidth: parseInt(this.$route.query.maxWidth || this.filters.maxWidth, 10),
        minHeight: parseInt(this.$route.query.minHeight || this.filters.minHeight, 10),
        maxHeight: parseInt(this.$route.query.maxHeight || this.filters.maxHeight, 10)
      };
      if(this.$route.query.acrylic) {
        this.filters.acrylic = 'true' === this.$route.query.acrylic;
      }
      else {
        this.filters.acrylic = true;
      }
      if(this.$route.query.charcoal) {
        this.filters.charcoal = 'true' === this.$route.query.charcoal;
      }
      else {
        this.filters.charcoal = true;
      }
      if(this.$route.query.watercolor) {
        this.filters.watercolor = 'true' === this.$route.query.watercolor;
      }
      else {
        this.filters.watercolor = true;
      }
      if(this.$route.query.pencil) {
        this.filters.pencil = 'true' === this.$route.query.pencil;
      }
      else {
        this.filters.pencil = true;
      }
      if(this.$route.query.pastel) {
        this.filters.pastel = 'true' === this.$route.query.pastel;
      }
      else {
        this.filters.pastel = true;
      }
      if(this.$route.query.mixed_media) {
        this.filters.mixed_media = 'true' === this.$route.query.mixed_media;
      }
      else {
        this.filters.mixed_media = true;
      }
      if(this.$route.query.other) {
        this.filters.other = 'true' === this.$route.query.other;
      }
      else {
        this.filters.other = true;
      }
    }
  },
  methods: {
    setFilter: function(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
    setValueFilter: function(event) {
      const inputId = event.target.id;
      const valueFilter = event.target.value;
      const updatedFilters = {
        ...this.filters,
        [inputId]: valueFilter,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  },
  watch: {
    filters(newValue) {
      this.$router.replace({ query: newValue });
    }
  }
};
</script>

<style scoped>
.container1 {
  display: flex;
  flex-wrap: wrap;
}

.container1 div {
  margin-right: 2rem;
}

.container2 {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 0px) and (max-width: 480px) {
  .container1 { justify-content: center; }
}

h2 {
  margin: 0.5rem 0;
  font-size: large;
}

.filter-option {
  width: 10rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}

.number_input {
  border: none;
  background-color: #eee;
  height: 2rem;
  border-radius: 5px;
  text-align: center;
}

input:focus {
  background-color: #fff2f2;
  outline: none;
  border-color: #aa3653;
}

.checkbox_label {
  display: inline;
  position: relative;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.checkbox_label input {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
  cursor: pointer;
}

.checkbox_label span {
  position: absolute;
  top: 0;
  height: 20px;
  width : 20px;
  border-radius: 20%;
  background-color : #eee;
  left: 0;
}

.checkbox_label:hover input ~ span {
  background-color: #f67e7d;
}

.checkbox_label input:checked ~ span {
  background-color: #621940;
}

.checkbox_label span:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox_label input:checked ~ span:after {
  display: block;
}

.checkbox_label span:after {
  left: 7px;
  top: 2px;
  -webkit-transform: rotate(46deg);
  -ms-transform : rotate( 46deg);
  transform : rotate( 46deg);
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
}

</style>