<template>
  <div class="slider-container">
    <div class="slider" :style="sliderStyle">
      <div class="slide" v-for="(slide, index) in slides" :key="index" :style="slideStyle(index)">
        <div class="slide-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.content }}</p>
          <router-link :to="getNewsUrl(slide.genre, index)" class="view-more">View More</router-link>
        </div>
        <div class="slide-image">
          <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
        </div>
      </div>
    </div>
    <button id="prevBtn" @click="prevSlide">◀</button>
    <button id="nextBtn" @click="nextSlide">▶</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: require('@/assets/article-sport-1.jpg'),
          title: 'Messi dan Tim Bawa Argentina Jadi Juara Piala Dunia 2022 FIFA World Cup Qatar',
          content:
            'Pertandingan menegangkan Messi dan tim di FIFA World Cup Qatar tadi malam akhirnya berakhir dengan Argentina yang lolos jadi juara Piala Dunia 2022.',
          genre: 'sport',
        },
        {
          image: require('@/assets/article-sport-2.jpg'),
          title: 'DEAL! Lionel Messi Resmi Gabung Inter Miami MLS, Harapan Barcelona dan Al Hilal Seketika Sirna',
          content:
            'Kabar mengejutkan kembali muncul, Lionel Messi resmi bergabung dengan Inter Miami di Major League Soccer (MLS) atau Liga Amerika Serikat.',
          genre: 'sport',
        },
        {
          image: require('@/assets/article-technology-1.jpg'),
          title: 'Photoshop Bakal Sematkan AI di Versi Terbarunya Firefly',
          content:
            'Photoshop tengah mengembangkan AI generatif Adobe. Mereka pun akan mengembangkan AI sehingga dapat memanipulasi sebuah gambar.',
          genre: 'technology',
        },
        {
          image: require('@/assets/article-technology-2.jpg'),
          title: 'Bos ChatGPT Dekati China, Minta Tolong Soal Ini',
          content:
            'CEO OpenAI sekaligus pencipta ChatGPT, Sam Altman, membujuk China untuk ambil bagian dalam pembentukan aturan soal teknologi kecerdasan buatan (AI). Hal itu ia sampaikan dalam sebuah konferensi yang digelar Beijing Academy of Artificial Intelligence.',
          genre: 'technology',
        },
      ],
      currentIndex: 0,
      slideWidth: 0,
      slideInterval: null,
    };
  },
  mounted() {
    this.slideWidth = this.$refs.slider.offsetWidth;
    this.startSlideInterval();
  },
  beforeDestroy() {
    this.stopSlideInterval();
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * this.slideWidth}px)`,
        transition: 'transform 0.3s ease-in-out',
      };
    },
  },
  methods: {
    getNewsUrl(genre, index) {
      return `/news/${genre}/${index}`;
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    slideStyle(index) {
      if (index === this.currentIndex) {
        return {
          flex: '0 0 100%',
          marginRight: '20px',
          textAlign: 'center',
        };
      }
      return {
        display: 'none',
      };
    },
    startSlideInterval() {
      this.slideInterval = setInterval(this.nextSlide, 1000);
    },
    stopSlideInterval() {
      clearInterval(this.slideInterval);
    },
  },
};
</script>

<style scoped>
.view-more {
  margin-right: 40px;
  position: absolute;
  bottom: 10px;
  right: 5px;
  padding: 10px 15px;
  color: #78b7bb;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.view-more:hover {
  background-color: #78b7bb;
  color: #ffffff;
}

.slider-container {
  position: relative;
  margin-left: 100px;
  margin-right: 100px;
}

.slider {
  position: relative;
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
}

.slide-content {
  font-family: 'Nanum Gothic', sans-serif;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 50%;
  max-width: 80%; 
  padding: 20px;
  text-align: right;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1; /* Menambahkan z-index untuk mengatur tumpukan elemen */
}

.slide-content h1 {
  margin-right: 40px;
  font-weight: 700;
  font-size: 24px;
  text-align: right;
  overflow-wrap: break-word;
}

.slide {
  flex: 0 0 100%;
  display: flex;
  transition: opacity 0.3s;
  position: relative;
}

.slide p {
  margin-right: 40px;
  font-size: 16px;
  margin-bottom: 30px;
  text-align: right;
  overflow-wrap: break-word;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: auto;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px;
  font-size: 16px;
  background-color: #78b7bb;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  z-index: 2; /* Menambahkan z-index untuk mengatur tumpukan elemen */
}

button:hover {
  background-color: #57a6aa;
}

button:active {
  transform: scale(0.95);
}

#prevBtn {
  left: 0;
}

#nextBtn {
  right: 0;
}

/* Perubahan ukuran font pada lebar tampilan tertentu */
@media (max-width: 1366px) {

  .view-more{
    font-size: 75%;
    margin-right: 40px;
    bottom: 1rem;
    right: 1rem;
    padding: 5px 6px;
  }
  .slide-content {
    width: 60%;
    max-width: 80%; 
    padding: 15px;
  }
  .slide-content h1,.slide-content p{
    font-size: 75%;
  }
  button {
    font-size: 75%;
  }
}
@media (max-width: 768px) {
  .slider-container{
    margin-left: 10px;
    margin-right: 10px;
  }
  .slide-content {
    font-size: 62.5%;
    width: 50%;
    max-width: 70%; 
    padding: 10px;
  }
  .view-more{
    font-size: 62.5%;
    margin-right: 40px;
    bottom: 1.2rem;
    right: .5rem;
    padding: 5px 6px;
  }
  .slide-content h1,.slide-content p{
    font-size: 62.5%;
  }
  button {
    font-size: 62.5%;
  }
}
@media (max-width: 450px) {
  .slider-container {
    margin: 0; /* Adjusted margin to remove horizontal space */
  }
  .view-more{
    font-size: 55%;
  }
  .slide-content h1,.slide-content p{
    font-size: 55%;
  }
  button {
    font-size: 55%;
  }
}
</style>