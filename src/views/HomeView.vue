<template>
  <div class="home">
    <Navbar />
    <Hero />
    <ContentSlide />
    <NewsContent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/HomePage/Navbar.vue'
import Hero from '@/components/HomePage/Hero.vue'
import ContentSlide from '@/components/HomePage/ContentSlide.vue'
import NewsContent from '@/components/HomePage/NewsContent.vue'
import Footer from '@/components/HomePage/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    ContentSlide,
    NewsContent,
    Footer
  },
  mounted() {
  this.updatePageTitle('The Fun Sized, Fresh, and Flavorful News Source! | NewsBite');
  },
  methods: {
    updatePageTitle(newTitle) {
      document.title = newTitle;
  }
}
}
</script>

