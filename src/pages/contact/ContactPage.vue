<template>
  <section id='selected_menu'>
    <base-card class='StartHeaderBgColor'>
      <div class='start_header'>
        <h2>Contact Info</h2>
      </div>
    </base-card>
  </section>
  <section>
    <base-card>
      <h2>Contact Marija!</h2>
      <div class='contacts'>
        <h3>E-Mail: <a href='mailto:maridzasart@gmail.com?subject=Mail from Website'>maridzasart@gmail.com</a></h3>
        <h3>Phone number: 000 000 000</h3>
        <h3>Facebook: <a href='https://www.facebook.com/marija.kjurchieva.1' target='_blank'>Мариџа Ќурчиева</a></h3>
        <h3>Instagram: Marija Kjurchieva</h3>
        <h3>Twitter: Marija Kjurchieva</h3>
        <h3>Skype: Marija Kjurchieva</h3>
        <br>
        <p>ovie na kraj kako icons samo bi bile</p>
      </div>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
export default {
  name: 'ContactPage',
  components: { BaseCard }
};
</script>



<style scoped>
@media screen and (min-width: 1000px) {
  #selected_menu { display: none; }
}

#selected_menu {
  text-align: left;
}

.start_header {
  display: flex;
  margin: 0;
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

section {
  max-width: 60rem;
  margin: auto;
  text-align: center;
}

h2 {
  margin: 1rem;
}

div {
  margin: 3rem;
}

</style>