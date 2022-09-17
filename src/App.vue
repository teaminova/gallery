<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';

export default {
    name: 'App',
    components: {
        TheHeader
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
