<template>
  <section id='selected_menu'>
    <base-card class='StartHeaderBgColor'>
      <div class='start_header'>
        <h2>Gallery</h2>
      </div>
    </base-card>
  </section>
  <section class='themes' id='themes'>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "all"}'
      @click='chosenTheme = "all"'
    >SHOW ALL</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "portrait"}'
      @click='chosenTheme = "portrait"'
    >PORTRAITS</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "still_life"}'
      @click='chosenTheme = "still_life"'
    >STILL LIFE</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "landscape"}'
      @click='chosenTheme = "landscape"'
    >LANDSCAPES</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "act"}'
      @click='chosenTheme = "act"'
    >ACT</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "abstract"}'
      @click='chosenTheme = "abstract"'
    >ABSTRACT</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "sketch"}'
      @click='chosenTheme = "sketch"'
    >SKETCHES</base-button>
    <base-button
      mode='flat'
      :class='{ selected_theme: chosenTheme === "other"}'
      @click='chosenTheme = "other"'
    >OTHER</base-button>
  </section>
  <section class='searchFilterSort'>
    <base-card>
      <section id='dropdownThemes'>
        <div>
          <h3 style='display: inline'><label for="theme">Choose a theme: </label></h3>
          <select name="theme" id="theme">
            <option value="all" selected @click='chosenTheme = "all"'>Show All</option>
            <option value="portraits" @click='chosenTheme = "portrait"'>Portraits</option>
            <option value="still_life" @click='chosenTheme = "still_life"'>Still Life</option>
            <option value="landscapes" @click='chosenTheme = "landscape"'>Landscapes</option>
            <option value="act" @click='chosenTheme = "act"'>Act</option>
            <option value="abstract" @click='chosenTheme = "abstract"'>Abstract</option>
            <option value="sketches" @click='chosenTheme = "sketch"'>Sketches</option>
            <option value="other" @click='chosenTheme = "other"'>Other</option>
          </select>
        </div>
      </section>
      <div class='SFS_controls'>
        <div>
          <picture-search @change-searcher='setSearcher'></picture-search>
        </div>
        <div>
          <base-button @click='filterOptions' :mode='{outline: !showFilterOptions}' >Filter</base-button>
          <base-button @click='sortOptions' :mode='{outline: !showSortOptions}' >Sort</base-button>
        </div>
      </div>
      <section v-show='showFilterOptions'>
        <br>
        <picture-filter @change-filter='setFilters'></picture-filter>
      </section>
      <section v-show='showSortOptions'>
        <br>
        <picture-sort @change-sorter='setSorter'></picture-sort>
      </section>
    </base-card>
  </section>
  <section>
    <base-card>
      <div class='controls'>
        <base-button mode='outline'>Refresh</base-button>
        <base-button link to='/addPic'>Add</base-button>
      </div>
      <ul v-if='hasGallery'>
        <picture-item v-for='picture in filteredGallery'
                      :key='picture.id'
                      :id='picture.id'
                      :title='picture.title'
                      :price='picture.price'
                      :width='picture.width'
                      :height='picture.height'
        ></picture-item>
      </ul>
      <h3 v-else>No pictures found.</h3>
    </base-card>
  </section>
</template>

<script>
import PictureItem from '@/components/gallery/PictureItem';
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import PictureFilter from '@/components/gallery/PictureFilter';
import PictureSort from '@/components/gallery/PictureSort';
import PictureSearch from '@/components/gallery/PictureSearch';

export default {
  name: 'PicturesList',
  components: { PictureSearch, PictureSort, PictureFilter, BaseButton, BaseCard, PictureItem },
  data() {
    return {
      chosenTheme: "all",
      searcher: '',
      showFilterOptions: false,
      showSortOptions: false,
      activeFilters: {
        minPrice: 0,
        maxPrice: 1000000000,
        minWidth: 0,
        maxWidth: 1000000000,
        minHeight: 0,
        maxHeight: 1000000000,
        S_height: true,
        M_height: true,
        L_height: true,
        XL_height: true,
        acrylic: true,
        charcoal: true,
        watercolor: true,
        pencil: true,
        pastel: true,
        mixed_media: true,
        other: true
      },
      sorter: 'newest'
    };
  },
  computed: {
    filteredGallery() {
      const gallery = [...this.$store.getters['gallery/gallery']];
      const sortedGallery = this.sortGallery(gallery);
      const searchedGallery = this.searchGallery(sortedGallery);
      return searchedGallery.filter(picture => {
        return (this.chosenTheme === 'all' || this.chosenTheme === picture.theme)
          && (this.activeFilters.minPrice <= picture.price)
          && (this.activeFilters.maxPrice >= picture.price || this.activeFilters.maxPrice === '')
          && (this.activeFilters.minWidth <= picture.width)
          && (this.activeFilters.maxWidth >= picture.width || this.activeFilters.maxWidth === '')
          && (this.activeFilters.minHeight <= picture.height)
          && (this.activeFilters.maxHeight >= picture.height || this.activeFilters.maxHeight === '')
          && ((this.activeFilters.acrylic && picture.techniques.includes('acrylic'))
            || (this.activeFilters.charcoal && picture.techniques.includes('charcoal'))
            || (this.activeFilters.watercolor && picture.techniques.includes('watercolor'))
            || (this.activeFilters.pencil && picture.techniques.includes('pencil'))
            || (this.activeFilters.pastel && picture.techniques.includes('pastel'))
            || (this.activeFilters.mixed_media && picture.techniques.includes('mixed_media'))
            || (this.activeFilters.other && picture.techniques.includes('other')));
      });
    },
    hasGallery() {
      return this.$store.getters['gallery/hasGallery'];
    },
  },
  methods: {
    filterOptions() {
      this.showFilterOptions = !this.showFilterOptions;
      this.showSortOptions = false;
    },
    sortOptions() {
      this.showSortOptions = !this.showSortOptions;
      this.showFilterOptions = false;
    },
    setSearcher(updatedSearcher) {
      this.searcher = updatedSearcher;
    },
    searchGallery(gallery) {
      if (this.searcher !== '' && this.searcher) {
        return gallery.filter((picture) => {
          return picture.title.toUpperCase().includes(this.searcher.toUpperCase())
        });
      }
      else {
        return gallery;
      }
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    setSorter(updatedSorter) {
      this.sorter = updatedSorter;
    },
    sortGallery(gallery) {
      if (this.sorter === 'newest'){
        return [...this.$store.getters['gallery/gallery']].reverse();
      }
      else if (this.sorter === 'a_z') {
        return gallery.sort((a,b) => (a.title > b.title) ? 1 : -1);
      }
      else if (this.sorter === 'z_a') {
        return gallery.sort((a,b) => (a.title < b.title) ? 1 : -1);
      }
      else if (this.sorter === 'l_h') {
        return gallery.sort((a,b) => (a.price > b.price) ? 1 : -1);
      }
      else if (this.sorter === 'h_l') {
        return gallery.sort((a,b) => (a.price < b.price) ? 1 : -1);
      }
      else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  #selected_menu { display: none; }
}

.start_header {
  display: flex;
}

.StartHeaderBgColor {
  background-color: #8888aa;
  margin-top: 0;
  padding: 0.5rem;
}

.start_header h2 {
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  color: #ffffff;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
  #themes { display: none; width: 90%; }
}

@media screen and (min-width: 769px) {
  #dropdownThemes { display: none; }
}

#dropdownThemes div {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}

#dropdownThemes select {
  text-decoration: none;
  border: none;
  background-color: #eee;
  margin-left: 1rem;
  height: 3rem;
  width: 10rem;
  border-radius: 5px;
  font-size: medium;
  text-align: center;
  cursor: pointer;
}

#dropdownThemes option {
  text-align: center;
}

.themes {
  margin: 2rem auto;
  max-width: 65rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-weight: bold;
}

.selected_theme {
  background-color: #8888aa;
  color: #ffffff;
}

.searchFilterSort {
  max-width: 60rem;
  margin: auto;
}

.SFS_controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (min-width: 0px) and (max-width: 480px) {
  .SFS_controls { justify-content: center; }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>