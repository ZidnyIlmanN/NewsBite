<template>
  <div class="login-view">
    <div class="home">
      <LoginForm @login-success="redirectToHome" />
      <FooterLogin />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginPage/LoginForm.vue'
import FooterLogin from '@/components/HomePage/Footer.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm,
    FooterLogin
  },
  mounted() {
    this.updatePageTitle('Log In to Your NewsBite Account | NewsBite');
  },
  methods: {
    updatePageTitle(newTitle) {
      document.title = newTitle;
    },
    redirectToHome() {
      this.$router.push('/');
    }
  }
}
</script>
