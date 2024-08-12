<template>
  <div class="news-container">
    <h1 class="hot-news">Hot News Here!</h1>
    <div class="search-bar-container">
      <input class="search-bar" type="text" v-model="searchQuery" @input="searchNews" placeholder="Search for the news you want to find!">
    </div>
    <div class="news-column">
      <div class="news-grid">
        <div v-for="(news, index) in newsList" :key="index" class="news-item">
          <router-link :to="getNewsUrl(news.genre, index)" class="news-link">
            <div class="news-image">
              <img :src="news.image" alt="News Image" />
            </div>
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.content }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'ContentNews',
  data() {
    return {
      newsList: [
        {
          image: require('@/assets/article-sport-1.jpg'),
          title: "Messi dan Tim Bawa Argentina Jadi Juara Piala Dunia 2022 FIFA World Cup Qatar, Perancis Nyaris",
          genre: "sport",
        },
        {
          image: require('@/assets/article-sport-2.jpg'),
          title: "DEAL! Lionel Messi Resmi Gabung Inter Miami MLS, Harapan Barcelona dan Al Hilal Seketika Sirna",
          genre: "sport",
        },
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
        {
          image: require('@/assets/article-business-1.jpg'),
          title: "Peneliti Temukan Kunci Genetik untuk Perpanjangan Umur",
          genre: "business",
        },
        {
          image: require('@/assets/article-business-2.jpg'),
          title: "Elon Musk says his Shanghai factory makes the ‘highest quality’ Teslas",
          genre: "business",
        },
        {
          image: require('@/assets/article-lifestyle-1.jpg'),
          title: "Jangan Jadikan Bayi Tabung Opsi Terakhir Punya Anak, Ini Alasannya",
          genre: "lifestyle",
        },
        {
          image: require('@/assets/article-lifestyle-2.jpg'),
          title: "Waspadai Asupan Protein Berlebih dalam Tubuh",
          genre: "lifestyle",
        },
        {
          image: require('@/assets/article-lifestyle-3.jpg'),
          title: "Oversleeping, Penyebab, Gejala hingga Pengobatannya",
          genre: "lifestyle",
        },
      ],
      recommendationList: [
        {
          image: require('@/assets/article-sport-3.jpg'),
          title: "Man City Akhirnya Punya UCL, Dulu Dicap Tidak Punya Sejarah, Kini Ciptakan Sejarah!",
          genre: "sport",
        },
        {
          image: require('@/assets/article-sport-3.jpg'),
          title: "5 Destinasi Wisata yang Harus Dikunjungi di Tahun 2023",
          genre: "technology",
        },
        {
          image: require('@/assets/article-sport-3.jpg'),
          title: "Inovasi Terbaru dalam Teknologi Pembelajaran Jarak Jauh",
          genre: "business",
        },
        // Rekomendasi berita lainnya...
      ],
      originalNewsList: [],
      searchQuery: '', // Menambahkan searchQuery ke data
    };
  },
  methods: {
    getNewsUrl(genre, index) {
      return `/news/${genre}/${index}`; // Menggunakan genre dalam URL berita
    },
    getRecommendationUrl(genre, index) {
      return `/recommendations/${genre}/${index}`; // Menggunakan genre dalam URL rekomendasi berita
    },
    searchNews() {
  if (this.searchQuery === '') {
    this.newsList = this.originalNewsList; // Assign original news list when the search query is empty
  } else {
    const filteredNews = this.originalNewsList.filter(news =>
      news.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.newsList = filteredNews;
  }
},
    resetNewsList() {
      // Mengembalikan newsList ke daftar berita awal
      this.newsList = [
        {
          image: require('@/assets/article-sport-1.jpg'),
          title: "Messi dan Tim Bawa Argentina Jadi Juara Piala Dunia 2022 FIFA World Cup Qatar, Perancis Nyaris",
          genre: "sport",
        },
        {
          image: require('@/assets/article-sport-2.jpg'),
          title: "DEAL! Lionel Messi Resmi Gabung Inter Miami MLS, Harapan Barcelona dan Al Hilal Seketika Sirna",
          genre: "sport",
        },
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
        {
          image: require('@/assets/article-business-1.jpg'),
          title: "Peneliti Temukan Kunci Genetik untuk Perpanjangan Umur",
          genre: "business",
        },
        {
          image: require('@/assets/article-business-2.jpg'),
          title: "Elon Musk says his Shanghai factory makes the ‘highest quality’ Teslas",
          genre: "business",
        },
        {
          image: require('@/assets/article-lifestyle-1.jpg'),
          title: "Jangan Jadikan Bayi Tabung Opsi Terakhir Punya Anak, Ini Alasannya",
          genre: "lifestyle",
        },
        {
          image: require('@/assets/article-lifestyle-2.jpg'),
          title: "Waspadai Asupan Protein Berlebih dalam Tubuh",
          genre: "lifestyle",
        },
        {
          image: require('@/assets/article-lifestyle-3.jpg'),
          title: "Oversleeping, Penyebab, Gejala hingga Pengobatannya",
          genre: "lifestyle",
        },
      ];
    },
  },
  watch: {
    searchQuery: function() {
      this.searchNews();
    },
  },
  created() {
    this.originalNewsList = [...this.newsList];
  },
};
</script>


<style scoped>
.news-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto; /* Adjust the margins as desired */
}
.hot-news {
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.search-bar {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-bottom: 5vh;
  width: 300px;
  max-width: 100%; /* Set max-width to 100% */
  box-sizing: border-box; /* Add this line to include padding in the width calculation */
}
.search-bar:hover{
  cursor: pointer;
  color: #fff;
  background-color: #78B7BB;
  transition: .2s linear;
}

.search-bar:focus {
  outline: none;
  border: 2px solid #78b7bb;
}
.news-container {
  display: flex;
  justify-content: center;
  margin: 5rem 100px; /* Adjust the margins as desired */
}

.news-column {
  flex: 1;
  margin-top: 1rem; /* Add margin to create space between search bar and news */
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
}

.news-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.news-image img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

h3 {
  font-size: 20px;
  margin: 0;
}

/* Styling for links */
.news-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: color 0.3s ease;
}

.news-link:hover {
  color: #78B7BB;
}

/* Perubahan ukuran font pada lebar tampilan tertentu */
@media (max-width: 1366px) {
  .hot-news{
    font-size: 40px;
    margin-top: 1rem;
  }
  .search-bar{
    font-size: 75%;
  }
  .news-column {
    margin-right: 0;
  }

  .news-container {
    flex-direction: column;
  }

  h3 {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .hot-news{
    font-size: 30px;
    margin-top: 1rem;
  }
  .search-bar{
    font-size: 62.5%;
  }
  .news-container {
    margin-left: 20px;
    margin-right: 20px;
  }

  .news-column {
    margin-right: 0;
  }
  .news-grid{
    grid-gap: 15px;
  }

  h3 {
    font-size: 62.5%;
  }
}

@media (max-width: 450px) {
  .hot-news{
    font-size: 25px;
    margin-top: 1rem;
  }
  .search-bar{
    margin-bottom: 1vh;
  }

  .news-column {
    margin-right: 0;
  }
  .news-grid{
    grid-gap: 10px;
  }

  h3 {
    font-size: 55%;
  }

  .news-container {
    margin: 20px;
  }
}
</style>