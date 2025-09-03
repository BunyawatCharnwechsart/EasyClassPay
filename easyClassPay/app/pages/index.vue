<template>
  <div class="BG">
    <div class="login-box">
      <h1>เข้าสู่ระบบ</h1>
      <p>กรุณากรอกข้อมูลเพื่อทำการเข้าสู่ระบบ</p>

      <form action="" method="post">
        <label for="username">ชื่อผู้ใช้</label>
        <input type="text" name="username" placeholder="กรุณากรอกชื่อผู้ใช้" required />

        <label for="password">รหัสผ่าน</label>
        <div class="password-wrapper">
          <input
            :type="showPassword ? 'text' : 'password'"
            name="password"
            id="password"
            placeholder="กรุณากรอกรหัสผ่าน"
            required
          />
          <button type="button" class="toggle-btn" @click="togglePassword">
            <img
              :src="showPassword ? '/view.png' : '/hide.png'"
              alt="Toggle Password Visibility"
              class="eyelogin-icon"
            />
          </button>
        </div>

        <div class="forgot-password">
          <NuxtLink to="/remember" class="forgot-password">ลืมรหัสผ่าน</NuxtLink>
        </div>

        <input type="submit" value="เข้าสู่ระบบ" />

        <button type="button" class="google-login-button" @click="loginWithGoogle">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Icon" />
          <span>ล็อกอินด้วย google</span>
        </button>

        <div class="register-text">
          <NuxtLink to="/register" class="register-link">สมัครสมาชิก</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const loginWithGoogle = () => {
  alert('Login with Google clicked')
}

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600&display=swap',
    },
  ],
})
</script>

<style>
* {
  font-family: 'Bai Jamjuree', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.BG {
  background-image: url(/loginBG.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 


  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 60px;
}

.login-box {
  background: #ffffff;
  padding: 30px 25px;
  width: 550px;
  height: 685px;
  max-width: 650px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  color: #000;
  margin-right: 100px;
}

.login-box h1 {
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 8px;
  margin-top: 35px;
}

.login-box p {
  text-align: center;
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
}

.login-box label {
  display: block;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 18px;
}

.login-box input[type='text'],
.login-box input[type='password'] {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  width: 100%;
  height: 50px;
  padding: 0 45px 0 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.toggle-btn {
  position: absolute;
  right: 12px;
  top: 40%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.eyelogin-icon {
  width: 25px;
  height: 25px;
  margin: ;
}

.forgot-password {
  text-align: center;
  margin-bottom: 16px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #ff0000;
  cursor: pointer;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-box input[type='submit'] {
  width: 100%;
  height: 50px;
  background-color: #159448;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 18px;
  margin-top: 8px;
  transition: background-color 0.3s ease;
}

.login-box input[type='submit']:hover {
  background-color: #117834;
}

.google-login-button {
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  transition: 0.3s ease;
  margin-bottom: 90px;
}

.google-login-button img {
  width: 26px;
  height: 26px;
}

.google-login-button:hover {
  background-color: #f9f9f9;
  border-color: #888;
}

.register-text {
  text-align: center;
}

.register-link {
  font-weight: 600;
  color: #000;
  font-size: 16px;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

</style>