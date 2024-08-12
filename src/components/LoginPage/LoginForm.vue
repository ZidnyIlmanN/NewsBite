<template>
  <body>
    <div class="login-container">
      <div class="login-box">
        <form @submit.prevent="login">
          <h2>Login</h2>
          <div class="input-box">
            <span class="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required v-model="username">
            <label>Username</label>
          </div>
          <div class="input-box">
            <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required v-model="password">
            <label>Password</label>
          </div>
          <button type="submit" @click.prevent="login">Login</button>
  
          <div class="register-link">
            <p>Don't have an account? <router-link to="/register">Register</router-link></p>
          </div>
        </form>
      </div>
    </div>
    </body>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8080/login", {
          username: this.username,
          password: this.password
        })
        .then((res) => {
          alert(res.data);
          console.log(res);
          if (res.data === 'Login Success') {
            // Mengarahkan pengguna ke halaman "/"
            this.$router.push('/');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>
  
  <style scoped lang="scss">
  :root {
    --primary: #c16d00;
    --bg: #f2f2f2;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to right top, #fff1c1, #ffecd0, #ffece5, #ffeff6, #fff5fd, #f6f0fa, #ececf6, #e3e7f1, #cbdae9, #b0cede, #93c3cf, #78b7bb);
}
  
  .login-container {
    font-family: 'Nanum Gothic', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-box {
    position: relative;
    width: 400px;
    height: auto;
    background: transparent;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #222;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .input-box {
    position: relative;
    margin-bottom: 20px;
  }
  
  .input-box label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 14px;
    color: #888;
    transition: 0.3s;
    pointer-events: none;
  }
  
  .input-box input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    font-size: 16px;
    padding-left: 30px;
    background: transparent;
    transition: 0.3s;
  }
  
  .input-box input:focus,
  .input-box input:valid {
    border-color: var(--primary);
  }
  
  .input-box input:focus + label,
  .input-box input:valid + label {
    top: -12px;
    font-size: 12px;
    color: var(--primary);
  }
  
  .icon {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #888;
  }
  
  button {
    width: 100%;
    height: 40px;
    background: #d11124;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }
  
  button:hover {
    background: #d65c68;
  }
  
  .register-link {
    font-size: 14px;
    color: #888;
    text-align: center;
    margin-top: 20px;
  }
  
  .register-link a {
    color: #d11124;
    text-decoration: none;
  }
  
  .register-link a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
  .login-container {
    font-size: 62.5%;
  }

  .login-box {
    width: 100%; /* Misalnya, mengurangi lebar kotak login */
  }

  h2 {
    font-size: 20px; /* Misalnya, mengurangi ukuran judul */
  }

  .input-box label {
    font-size: 12px; /* Misalnya, mengurangi ukuran label */
  }

  .input-box input {
    font-size: 14px; /* Misalnya, mengurangi ukuran input */
  }

  button {
    font-size: 14px; /* Misalnya, mengurangi ukuran tombol */
  }

  .register-link {
    font-size: 12px; /* Misalnya, mengurangi ukuran teks link register */
  }
}

@media (max-width: 450px) {
  .login-container {
    font-size: 55%;
  }
}
</style>
  