<template>
    <div id="row">
      <div class="genre-menu">
        <router-link class="genre-item" :to="'/news/' + category.toLowerCase()" v-for="(category, index) in categories" :key="index">
          {{ category }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        categories: ['Technology ', 'Business', 'Lifestyle', 'Sport']
      };
    }
  };
  </script>
  

<style scoped lang="scss">
.genre-menu {
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding: 20px;
    position: relative;
}

.genre-menu a {
    color: #040404;
}

.genre-menu a::after {
    content: '';
    display: block;
    border: 0;
    border-radius: 10px;
    border-bottom: 0.15rem solid #808B97;
    transform: scaleX(0);
    transition: 0.2s linear;
}

.genre-menu a:hover::after {
    transform: scaleX(1);
}

.genre-item {
    margin: 0 10px;
    color: #000;
    text-decoration: none;
}

@media (max-width: 1366px) {
    .genre-menu {
        font-size: 75%;
    }
}

@media (max-width: 450px) {
    .genre-menu {
        font-size: 55%;
    }
}
</style>
