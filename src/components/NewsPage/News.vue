<template>
  <div class="news-container">
    <div class="news-image">
      <img :src="newsImage" alt="News Image" />
    </div>
    <h1 class="news-title">{{ newsTitle }}</h1>
    <p class="news-content" v-for="(content, index) in newsContent" :key="index">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContentNews',
  data() {
    return {
      newsTitle: "",
      newsContent: [],
      newsImage: ""
    };
  },
  created() {
    this.loadNewsData();
  },
  methods: {
    loadNewsData() {
  const genre = this.$route.params.genre;
  const newsList = this.getNewsListByGenre(genre);

  if (newsList && newsList.length > 0) {
    const index = parseInt(this.$route.params.index) % newsList.length; // Menghitung indeks relatif terhadap panjang newsList
    const news = newsList[index];
    this.newsTitle = news.title || "";
    this.newsContent = news.content || [];
    this.newsImage = this.getImagePath(news.image) || "";
  } else {
    // Handle invalid genre or empty newsList here
    this.newsTitle = "";
    this.newsContent = [];
    this.newsImage = "";
  }
}

,
    getNewsListByGenre(genre) {
      if (genre === 'sport') {
        return [
          {
            image: "article-sport-1.jpg",
            title: "Messi dan Tim Bawa Argentina Jadi Juara Piala Dunia 2022 FIFA World Cup Qatar, Perancis Nyaris",
            content: [
              "Sempat beradu skor dengan Perancis 3-3 di FIFA World Cup Qatar, tendangan penalti dari Messi mewujudkan harapan Argentina menjadi juara Piala Dunia 2022.",
              "Argentina vs Prancis yang adu kekuatan malam tadi 18/12/2022 di FIFA World Cup Qatar tak terelakkan dengan kekuatan tendangan Messi untuk memimpin juara Piala Dunia 2022.",
              "Selama hampir 1 bulan mengikuti semarak pertandingan sepak bola dunia FIFA World Cup Qatar, akhirnya pertandingan akhir mencari juara Piala Dunia 2022 dimenangkan oleh Argentina."
            ]
          },
          {
            image: "article-sport-2.jpg",
            title: "Kebakaran Hutan Terbesar dalam Dua Dekade Terjadi di Amazon",
            content: [
              "Kebakaran hutan terbesar dalam dua dekade terjadi di Amazon pada bulan ini. Luas lahan yang terbakar mencapai ribuan hektar dan mengancam ekosistem alam.",
              "Kebakaran ini disebabkan oleh cuaca yang ekstrem dan aktivitas manusia yang tidak bertanggung jawab. Berbagai upaya dilakukan untuk memadamkan api dan melindungi hutan Amazon yang penting bagi keanekaragaman hayati global."
            ]
          },
          {
            image: "article-sport-3.jpg",
            title: "Man City Akhirnya Punya UCL, Dulu Dicap Tidak Punya Sejarah, Kini Ciptakan Sejarah!",
            content: [
              "Selamat, Manchester City! Trofi pertama Liga Champions akhirnya berhasil diraih sepanjang sejarah klub.",
              "Man City keluar sebagai juara usai menundukkan Inter Milan dengan skor tipis 1-0. Duel final Liga Champions 2022/2023 berlangsung di Ataturk Olympic Stadium, Turki, Minggu (11/6/2023) WIB.",
              "Gol tunggal Rodri di menit ke-68 memastikan Man City membawa pulang Si Kuping Lebar ke kabinet trofinya di Inggris. Kesuksesan ini jadi kebanggaan bagi para netizen pendukung Cityzens di media sosial.",
              "Mereka yang telah lama menunggu Man City dari zaman dicap sebagai tim yang tidak punya sejarah, kini pantas berbahagia. Momen yang mereka tunggu-tunggu datang dengan cara yang spesial."
            ]
          },
          {
            image: "article-sport-4.jpg",
            title: "FIFA Match Day 2023: Indonesia Vs Argentina Resmi Digelar!",
            content: [
            "Indonesia telah resmi akan bertanding bersama Argentina dalam FIFA Match Day 2023. Kabar tersebut dapat diketahui melalui sebuah unggahan pada laman sosial media Twitter oleh official akun timnas Argentina, pada 22 Mei 2023 lalu.",
            "Sebelumnya La Albiceleste sebutan bagi timnas Argentina, telah mengkonfirmasi terkait kesediaannya bertanding bersama Indonesia. Merespon dari undangan yang dikirim oleh Tim Garuda, pertandingan resmi akan digelar pada tanggal 19 Juni 2023.",
            "Pasalnya dalam proses pertimbangan untuk mengundang timnas Argentina untuk bertanding bersama, PSSI sempat merasakan keraguan bahwa undangan untuk bertanding sebagai ajang uji coba akan ditolak.",
            "Namun keraguan itu terbantahkan ketika munculnya konfirmasi dari pihak terkait yang muncul dari sebuah cuitan salah seorang jurnalis Argentina, dengan akun TyC Sport, Gaston Edul.",
            "Gaston mengungkapkan bahwa La Albiceleste akan tampil bertanding pada dua laga uji coba yang diselenggarakan di Asia. Menjadi sebuah perbincangan hangat di kalangan publik, khususnya para pecinta dunia sepak bola Indonesia bahwa timnas kesayangannya akan bertempur bersama pasukan Lionel Scaloni."
            ]
          }
        ];
      } else if (genre === 'technology') {
  return [
    {
      image: "article-technology-1.jpg",
      title: "Inovasi Terbaru dalam Teknologi Ponsel",
      content: [
      "Industri teknologi ponsel terus mengalami inovasi dan perkembangan yang pesat. Beberapa inovasi terbaru termasuk teknologi layar lipat, kamera berkualitas tinggi, dan konektivitas 5G.",
      "Dengan adanya inovasi ini, pengguna ponsel dapat menikmati pengalaman menggunakan ponsel yang lebih canggih dan fungsional. Perkembangan teknologi ponsel juga memberikan dampak yang signifikan dalam berbagai sektor, seperti komunikasi, hiburan, dan bisnis."
      ]
    },
    {
      image: "article-technology-2.jpg",
      title: "Perkembangan Terbaru dalam Keamanan Siber",
      content: [
      "Beberapa perkembangan terbaru dalam keamanan siber meliputi penggunaan kecerdasan buatan (AI) untuk mendeteksi ancaman, perlindungan data dengan enkripsi yang kuat, dan penerapan kebijakan keamanan yang ketat.",
      "Upaya pencegahan dan deteksi dini menjadi kunci dalam melindungi sistem dan informasi dari serangan siber yang berpotensi merugikan."
      ]
    }
  ];
}
// ...
else if (genre === 'business') {
  return [
    {
      image: "article-business-1.jpg",
      title: "Pengaruh Inflasi Terhadap Ekonomi",
      content: [
        "Inflasi adalah peningkatan umum dan terus-menerus dalam harga barang dan jasa dalam suatu ekonomi. Pengaruh inflasi terhadap ekonomi dapat bervariasi, tergantung pada tingkat inflasi yang terjadi.",
        "Dalam beberapa kasus, inflasi yang terkendali dapat merangsang pertumbuhan ekonomi dan mendorong investasi. Namun, inflasi yang tinggi dan tidak terkendali dapat mengurangi daya beli masyarakat, mengurangi nilai uang, dan menciptakan ketidakstabilan ekonomi."
      ]
    },
    {
      image: "article-business-2.jpg",
      title: "Elon Musk says his Shanghai factory makes the ‘highest quality’ Teslas",
      content: [
      "Tesla CEO Elon Musk has wrapped up his first trip to China in three years, after meeting a string of government officials and thanking workers at the company’s mega factory in Shanghai.",
      "Musk’s private jet took off from Shanghai’s Hongqiao airport on Thursday, capping a whirlwind 48-hour trip by the billionaire, according to Variflight, a Chinese flight data app.",
      "It was the first time Musk has visited the country since January 2020, when a video of him dancing onstage at Tesla’s Shanghai factory went viral.",
      "Before leaving, Musk met Chen Jining, the Communist Party chief of Shanghai, according to a statement by the city government."
      ]
    }
  ];
}
// ...
else if (genre === 'lifestyle') {
  return [
  {
      image: "article-lifestyle-1.jpg",
      title: "Jangan Jadikan Bayi Tabung Opsi Terakhir Punya Anak, Ini Alasannya",
      content: [
        "In Vitro Fertilization (IVF) atau bayi tabung sering menjadi pilihan terakhir pasangan yang kesulitan memiliki keturunan.",
        "Banyak pasutri biasanya menempuhnya setelah mencoba berbagai metode lain yang tidak berhasil.",
        "Seiring perkembangan teknologi reproduksi, tingkat keberhasilan program bayi tabung memang terus meningkat meskipun ada banyak faktor lain juga berpengaruh."
      ]
    },
    // Data untuk rute /news/lifestyle/7
    {
      image: "article-lifestyle-2.jpg",
      title: "Waspadai Asupan Protein Berlebih dalam Tubuh",
      content: [
        "Tubuh memerlukan protein untuk berfungsi dengan baik.",
        "Namun, segala sesuatu yang terlalu banyak bisa berdampak negatif. Begitu pula dengan protein.",
        "Ahli diet terdaftar Kate Patton menjelaskan, ada kemungkinan kita mengonsumsi terlalu banyak protein, terutama jika mengikuti diet tinggi protein seperti diet paleo."
      ]
    },
    // Data untuk rute /news/lifestyle/8
    {
      image: "article-lifestyle-3.jpg",
      title: "Oversleeping, Penyebab, Gejala hingga Pengobatannya",
      content: [
        "Jumlah jam tidur yang tepat bagi setiap orang bervariasi. Namun bagi orang dewasa, tidur lebih dari sembilan jam umumnya dianggap sebagai tidur berlebihan atau oversleeping.",
        "Oversleeping yang terjadi secara terus-menerus bukanlah hal yang baik, dan dapat menandakan sesuatu yang lebih serius.",
        "Menurut Pusat Pengendalian dan Pencegahan Penyakit AS (CDC), orang dewasa umumnya membutuhkan antara 7-9 jam tidur setiap malam."
      ]
    }
  ];
} 
  else {
    return [];
  }
    },
    getImagePath(image) {
      try {
        return require(`@/assets/${image}`);
      } catch (error) {
        // Handle image loading error here
        console.error("Failed to load image:", image);
        return "";
      }
    }
  },
  watch: {
    '$route.params': {
      handler() {
        this.loadNewsData();
      },
      deep: true
    }
  }
};
</script>


<style>
.news-container {
  font-family: 'Nanum Gothic', sans-serif;
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 800px;
  margin: 0 auto;
}

.news-image {
  margin-bottom: 20px;
}

.news-image img {
  width: 100%;
  height: auto;
}

.news-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.news-content {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .news-container {
    width: 90%; /* Misalnya, mengurangi lebar kontainer berita */
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .news-title {
    font-size: 20px; /* Misalnya, mengurangi ukuran judul berita */
  }

  .news-content {
    font-size: 14px; /* Misalnya, mengurangi ukuran konten berita */
  }

  .news-image img {
    width: 100%;
    height: auto; /* Mengatur gambar agar responsif */
  }
}

@media (max-width: 450px) {
  .news-container {
    width: 95%; /* Misalnya, mengurangi lebar kontainer berita */
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .news-title {
    font-size: 18px; /* Misalnya, mengurangi ukuran judul berita */
  }

  .news-content {
    font-size: 12px; /* Misalnya, mengurangi ukuran konten berita */
  }
}

</style>
