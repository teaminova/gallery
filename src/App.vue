<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJf0ZfgpKdji8DbzIQ7C-yWT_PlxqKRxg",
  authDomain: "gallery-ad9c8.firebaseapp.com",
  projectId: "gallery-ad9c8",
  storageBucket: "gallery-ad9c8.appspot.com",
  messagingSenderId: "511763274036",
  appId: "1:511763274036:web:0442d980b1ed2fdba82d61",
  measurementId: "G-7D2CYDWLJZ"
};


export default {
  name: 'App',
  components: {
    TheHeader
  },
  created() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
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
  min-height: 100%;

  background: #f4c2c2 url("components/assets/background_image.jpg") no-repeat fixed center center;
  -webkit-background-size: 100%;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

body {
  margin: 0;
  min-height: 100%;
}

the-header {
  position: sticky;
  top: 0;
}
</style>