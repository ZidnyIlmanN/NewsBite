<template>
    <div class="home">
      <RegisterForm />
      <FooterLogin />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  import RegisterForm from '@/components/RegisterPage/RegisterForm.vue'
  import FooterLogin from '@/components/HomePage/Footer.vue'
  
  export default {
    name: 'loginView',
    components: {
      RegisterForm,
      FooterLogin
    },
    mounted() {
  this.updatePageTitle('Create a NewsBite account | NewsBite');
  },
  methods: {
    updatePageTitle(newTitle) {
      document.title = newTitle;
  }
}
  }
  </script>