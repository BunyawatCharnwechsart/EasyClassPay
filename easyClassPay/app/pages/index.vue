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
              class="eye-icon"
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
  // เพิ่ม logic สำหรับ login ด้วย Google ที่นี่
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
  background-color: #f4b943;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 150px;
}

.login-box {
  background: #ffffff;
  padding: 40px 30px;
  width: 650px;
  height: 900px;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  color: #000;
}

.login-box h1 {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
}

.login-box p {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 40px;
  color: #555;
}

.login-box label {
  display: block;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 6px;
}

.login-box input[type='text'],
.login-box input[type='password'] {
  width: 100%;
  height: 55px;
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
  height: 55px;
  padding: 0 45px 0 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
}

.toggle-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.eye-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.forgot-password {
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
  color: #ff0000;
  cursor: pointer;
  text-decoration: none;
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
  margin-bottom: 20px;
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
  gap: 10px;
  padding-left: 15px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-bottom: 35px;
}

.google-login-button img {
  width: 28px;
  height: 28px;
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