<template>
    <div class="home">
        <Navbar />
        <Technology/>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/HomePage/Navbar.vue'
import Technology from '@/components/Category/Technology.vue'
import Footer from '@/components/HomePage/Footer.vue'

export default {
  name: 'NewsView',
  components: {
    Navbar,
    Technology,
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
  
  