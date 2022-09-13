<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase().split('_').join(' ');
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.theme {
  background-color: #ffffff;
  color: #621940;
  font-weight: bold;
  border: 3px solid #621940;
  border-radius: 5px;
}

.acrylic {
  background-color: #aa3653;
  color: white;
}

.charcoal {
  background-color: #d34467;
  color: white;
}

.watercolor {
  background-color: #dc6986;
  color: white;
}

.pencil {
  background-color: #704776;
  color: white;
}

.pastel {
  background-color: #8c5792;
  color: white;
}

.mixed_media {
  background-color: #926ca0;
  color: white;
}

.other {
  background-color: #888888;
  color: white;
}
</style>