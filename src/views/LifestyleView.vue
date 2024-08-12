<template>
    <div class="home">
        <Navbar />
        <Lifestyle/>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/HomePage/Navbar.vue'
import Lifestyle from '@/components/Category/Lifestyle.vue'
import Footer from '@/components/HomePage/Footer.vue'

export default {
  name: 'NewsView',
  components: {
    Navbar,
    Lifestyle,
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