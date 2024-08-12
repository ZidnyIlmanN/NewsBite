<template>
    <div class="home">
        <Navbar />
        <Sport/>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/HomePage/Navbar.vue'
import Sport from '@/components/Category/Sport.vue'
import Footer from '@/components/HomePage/Footer.vue'

export default {
  name: 'NewsView',
  components: {
    Navbar,
    Sport,
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