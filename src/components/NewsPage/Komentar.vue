<template>
    <div class="comment-section">
      <textarea class="comment-input" v-model="comment" placeholder="Enter your comment"></textarea>
      <div class="button-container">
        <button class="submit-button" @click="submitComment">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CommentSection',
    data() {
      return {
        comment: '',
      };
    },
    methods: {
      submitComment() {
        axios
          .post(
            'http://localhost:8080/comments',
            {
              comment: this.comment,
            },
            {
              headers: {
                Authorization: 'Bearer yourAuthToken', // Ganti dengan token yang sesuai
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            // Lakukan tindakan setelah komentar berhasil disimpan
          })
          .catch((error) => {
            console.error(error);
            // Lakukan tindakan jika terjadi kesalahan saat menyimpan komentar
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-input {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  
  .button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.submit-button {
  padding: 8px 16px;
  background-color: #78b7bb;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #9dc7ca;
  transition: .2s linear;
}
  </style>

  
  
  
  
  
  
  