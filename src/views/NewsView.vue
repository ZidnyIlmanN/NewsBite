<template>
    <div class="home">
      <Navbar />
      <ContentNews />
      <Komentar />
      <Footer />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/HomePage/Navbar.vue'
  import ContentNews from '@/components/NewsPage/News.vue'
  import Komentar from '@/components/NewsPage/Komentar.vue'
  import Footer from '@/components/HomePage/Footer.vue'
  
  export default {
    name: 'NewsView',
    components: {
      Navbar,
      ContentNews,
      Komentar,
      Footer
    },
    mounted() {
    this.updatePageTitle('NewsBite');
    },
    methods: {
      updatePageTitle(newTitle) {
        document.title = newTitle;
      }
    }
  }
  </script>