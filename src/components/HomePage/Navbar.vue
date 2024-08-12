<template>
  <div id="app">
    <nav class="navbar" :class="{ 'navbar-fixed': isNavbarFixed }">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img :src="require('@/assets/logo.png')" alt="Logo" />
        </a>
      </div>
      <div class="navbar-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <div class="toggle-icon"></div>
        <div class="toggle-icon"></div>
        <div class="toggle-icon"></div>
      </div>
      <div class="overlay" :class="{ 'overlay-visible': isMenuOpen }"></div>
      <div class="navbar-menu" :class="{ 'menu-open': isMenuOpen }">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link class="nav-link" to="/" @click="closeMenu">Home</router-link>
          </div>
          <div class="navbar-item">
            <a class="nav-link" href="#about" @click="closeMenu">Contact</a>
          </div>
          <div class="navbar-item">
            <router-link class="nav-link login-btn" to="/login" @click="closeMenu">Log In</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'NavbarMenu',
  data() {
    return {
      isNavbarFixed: false,
      isMenuOpen: false,
      searchQuery: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.closeMenuOnClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.closeMenuOnClickOutside);
  },
  methods: {
    searchNews() {
    // Lakukan filter berdasarkan judul menggunakan searchQuery
    const filteredNews = this.$parent.newsList.filter(news =>
      news.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    // Setel ulang newsList dengan berita yang telah difilter
    this.$parent.newsList = filteredNews;
    },
    handleScroll() {
      this.isNavbarFixed = window.pageYOffset > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    closeMenuOnClickOutside(event) {
      const navbarMenu = document.querySelector('.navbar-menu');
      const navbarToggle = document.querySelector('.navbar-toggle');
      if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
        this.isMenuOpen = false;
      }
    },
    watch: {
  searchQuery: function() {
    this.searchNews();
  },
},
  },
};
</script>

<style scoped lang="scss">
.navbar {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 1rem;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 0px 1px 0px rgb(0, 0, 0, 0.1);
  transition: top 0.3s;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.navbar-end {
    font-size: 16px;;
    display: flex;
    align-items: center;
    flex-basis: 100%;
    justify-content: flex-end;

}

.navbar.scrolled {
  box-shadow: 0px 1px 6px rgb(0, 0, 0, 0.12);
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  height: 40px;
  width: auto;
}

.navbar-menu {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.navbar-menu::after {
  content: "";
  transform: scaleX(0);
  display: block;
}

.navbar-menu:hover::after {
  transform: scaleX(1);
}

.nav-link {
  margin-left: 1rem;
  color: #000000;
  text-decoration: none;
}

.nav-link:hover {
  color: #78b7bb;
}

.navbar .login-btn {
  margin: 10px;
  float: right;
  background-color: #fff;
  color: black;
  padding: 2px 10px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #000000;
}

.navbar .login-btn:hover {
  color: #fff;
  background-color: #808b97;
  transition: 0.3s;
  border: 1px solid #ffffff;
}

.search-bar {
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  width: 200px;
  margin: 0 auto;
}

.search-bar:focus {
  outline: none;
  border: 2px solid #78b7bb;
}

#hamburger-menu {
  display: none;
}

@media (max-width: 1366px) {
  .navbar {
    padding: 0.5rem;
    font-size: 14px;
  }
  .navbar-end {
    font-size: 85%;
  }
  .navbar-end .login-btn {
    border-radius: 7px;
    font-size: 85%;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 14px;
  }

  .navbar-item {
    margin: 0.5rem 0;
    text-align: center;
  }
  
  .navbar-brand{
    margin-bottom: 0;
  }

  .navbar-end {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    justify-content: center;
  }

  .nav-link {
    color: #000;
    font-size: 16px;
  }

  .nav-link:hover {
  color: #78b7bb;
}

  .navbar-end .login-btn {
    margin-top: 1rem;
    font-size: 16px;
  }

  .navbar-end {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }

  .navbar-toggle {
    margin-right: 2vh;
    display: block;
    order: 3;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 40%;
    max-width: 200px;
    height: 100%;
    background-color: #ffffff;
    transition: right 0.3s;
    z-index: 999;
  }

  .navbar-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 18px;
    cursor: pointer;
    margin-left: auto;
  }

  .toggle-icon {
    width: 100%;
    height: 2px;
    background-color: #000000;
    transition: all 0.3s;
  }

  .active .toggle-icon:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .active .toggle-icon:nth-child(2) {
    opacity: 0;
  }

  .active .toggle-icon:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .menu-open .navbar-menu {
    transform: translateY(0);
  }

  .menu-open {
    right: 0;
  }
}

@media (max-width: 450px) {
  .navbar {
    padding: 0.5rem;
    font-size: 12px;
  }
}
</style>