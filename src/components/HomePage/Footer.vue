<template>
  <footer class="footer" id="about">
    <div class="footer-left">
      <a class="footer-item" href="/">
        <img :src="require('@/assets/logo.png')" alt="Logo" class="footer-logo" />
      </a>
    </div>
    <div class="footer-right">
      <div class="social-media">
        
        <a :href="facebookLink" class="social-media-link">
          <img src="@/assets/iconfacebook.png" alt="Facebook" />
        </a>
        <a :href="twitterLink" class="social-media-link">
          <img src="@/assets/icontwitter.png" alt="Twitter" />
        </a>
        <a :href="instagramLink" class="social-media-link">
          <img :src="Icon" alt="Instagram" />
        </a>
      </div>
      <p class="footer-copyright">
        &copy; 2023 PT. NewsBite Media. All rights reserved.
      </p>
    </div>
  </footer>
</template>
  
<script>
import Icon from '@/assets/iconinstagram.png'

export default {
  name: 'FooterSection',
  data() {
    return {
      Icon: Icon,
      instagramLink: 'https://www.instagram.com/',
      twitterLink: 'https://www.twitter.com/',
      facebookLink: 'https://www.facebook.com'
    }
  }
}
</script>

<style scoped>
.footer {
  font-family: 'Nanum Gothic', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #FFF1C1;
}

.footer-left {
  display: flex;
  align-items: center;
}

.footer-logo {
  width: 100px;
}

.footer-right {
  display: flex;
  align-items: center;
}

.social-media {
  display: flex;
}

.social-media-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin-right: 10px;
}

.social-media-link i {
  font-size: 18px;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }
  .footer-logo{
    padding-bottom: 12px;
  }
  .social-media-link img{
    width: 62.5%;
  }
  .footer-copyright{
    font-size: 62.5%;
  }
}
@media (max-width: 450px) {
  footer {
    flex-direction: column;
    align-items: center;
  }
  .footer-logo{
    padding-bottom: 12px;
  }
  .social-media-link img{
    width: 55%;
  }
  .footer-copyright{
    font-size: 55%;
  }
}

</style>

  