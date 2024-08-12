<template>
    <div class="home">
        <Navbar />
        <Business/>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/HomePage/Navbar.vue'
import Business from '@/components/Category/Business.vue'
import Footer from '@/components/HomePage/Footer.vue'

export default {
  name: 'NewsView',
  components: {
    Navbar,
    Business,
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