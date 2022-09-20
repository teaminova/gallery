<template>
  <section id="selected_menu">
    <base-card class="StartHeaderBgColor">
      <div class="start_header">
        <h2>Contact Info</h2>
      </div>
    </base-card>
  </section>
  <section>
    <base-card>
      <h2>Contact Marija!</h2>
      <div class="contacts">
        <div>
          <img src="../../components/assets/email_icon.jpg" alt="E-Mail">
          <h3><a href="mailto:maridzasart@gmail.com?subject=Mail from Website">maridzasart@gmail.com</a></h3>
        </div>
        <div>
          <img src="../../components/assets/phone_icon.jpg" alt="Phone Number">
          <h3><a href="">000 000 000</a></h3>
        </div>
        <div>
          <img src="../../components/assets/instagram_icon.jpg" alt="Instagram">
          <h3><a href="https://instagram.com/prosecen.umetnik" target="_blank">prosecen.umetnik</a></h3>
        </div>
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
  margin: 2rem;
}

.contacts {
  margin: auto;
  max-width: 25rem;
}

.contacts div {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  max-width: 30rem;
}

img {
  max-width: 3rem;
  margin-top: 0.5rem;
}

a {
  text-decoration: none;
  color: #420020;
  padding: 0.5rem;
}

a:hover,
a:active {
  color: #420020;
  border-radius: 0.5rem;
  border: 1px solid #8888aa;
}

h3 {
  margin: 0.75rem;
}

</style>