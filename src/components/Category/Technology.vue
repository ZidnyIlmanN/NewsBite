<template>
  <div class="news-container">
    <div class="news-column">
      <div class="news-grid">
        <div v-for="(news, index) in newsList" :key="index" class="news-item">
          <router-link :to="getNewsUrl(news.genre, index)" class="news-link">
            <div class="news-image">
              <img :src="news.image" alt="News Image" />
            </div>
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologySections',
  data() {
    return {
      newsList: [
        {
          image: require('@/assets/article-technology-1.jpg'),
          title: "Photoshop Bakal Sematkan AI di Versi Terbarunya Firefly",
          genre: "technology",
        },
        {
          image: require('@/assets/article-technology-2.jpg'),
          title: "Bos ChatGPT Dekati China, Minta Tolong Soal Ini",
          genre: "technology",
        },
        // Berita lainnya...
      ]
    };
  },
  methods: {
    getNewsUrl(genre, index) {
      return `/news/${genre}/${index}`; // Menggunakan genre dalam URL berita
    },
  },
};
</script>

  
  <style scoped>
  .news-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5rem auto;
    max-width: 1200px;
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  
  .news-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
  }
  
  .news-image img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  
  h3,
  p {
    margin: 0;
  }
  
  .news-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .news-link:hover {
    color: #78b7bb;
  }
  
  /* Perubahan ukuran font pada lebar tampilan tertentu */
  @media (max-width: 1366px) {
    .news-container {
      margin: 5rem auto;
      padding: 0 20px;
    }
  
    .news-grid {
      grid-gap: 15px;
    }
  
    .news-item {
      padding: 15px;
    }
  
    h3,
    p {
      font-size: 16px;
    }
  }
  
  @media (max-width: 768px) {
    .news-item {
      flex-basis: 50%;
    }
  
    h3,
    p {
      font-size: 14px;
    }
  }
  
  @media (max-width: 450px) {
    .news-item {
      flex-basis: 100%;
    }
  
    h3,
    p {
      font-size: 12px;
    }
  }
  </style>
  