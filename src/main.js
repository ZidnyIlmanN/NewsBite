import Vue from 'vue'
import App from './App.vue'
import router from './router'


// ...
import 'bulma/css/bulma.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
// ...
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
