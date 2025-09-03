<template>
  <div class="BGregister">
    <div class="register-box">
      <h1>สมัครสมาชิก</h1>
      <p>กรุณากรอกข้อมูลเพื่อทำการสมัครบัญชีผู้ใช้</p>

      <form action="" method="post">
        <label for="username">ชื่อผู้ใช้</label>
        <input
          type="text"
          name="username"
          placeholder="กรุณากรอกชื่อผู้ใช้"
          required
        />

          <div class="name-row">
            <div class="name-field">
              <label>ชื่อจริง</label>
              <input type="text" placeholder="กรุณากรอกชื่อจริง" required />
            </div>
            <div class="name-field">
              <label>นามสกุล</label>
              <input type="text" placeholder="กรุณากรอกนามสกุล" required />
            </div>
          </div>

        <label for="email">อีเมล</label>
        <input
          type="email"
          name="email"
          placeholder="กรุณากรอกอีเมล"
          required
        />

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

        <label for="birthdate">วันเกิด</label>
        <div class="birthday-wrapper">
          <select v-model="birthDay">
            <option value="">วัน</option>
            <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
          </select>

          <select v-model="birthMonth">
            <option value="">เดือน</option>
            <option v-for="(m, index) in months" :key="index" :value="index + 1">
              {{ m }}
            </option>
          </select>

          <select v-model="birthYear">
            <option value="">ปี</option>
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>

        <input type="submit" value="สมัครสมาชิก" />

        <div class="login-text">
          <NuxtLink to="/" class="login-link">เข้าสู่ระบบ</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const birthDay = ref("")
const birthMonth = ref("")
const birthYear = ref("")

const months = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => currentYear - i)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
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

.BGregister {
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

.register-box {
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

.register-box h1 {
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 8px;
  margin-top: 0px;
}

.register-box p {
  text-align: center;
  font-size: 18px;
  margin-bottom: 25px;
  color: #555;
}

.register-box label {
  display: block;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 1px;
}

.register-box input[type='text'],
.register-box input[type='email'],
.register-box input[type='password'] {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
}

/* Name row */
.name-row {
  display: flex;
  gap: 10px;
}

.name-field {
  flex: 1;
}

/* DOB */
.dob-row {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.dob-row select {
  flex: 1;
}

.password-wrapper {
  position: relative;
  margin-bottom: 1px;
}

.password-wrapper input {
  width: 100%;
  height: 50px;
  padding: 0 45px 0 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.birthday-wrapper {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.birthday-wrapper select {
  flex: 1;
  height: 50px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
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
}

.eye-icon {
  width: 25px;
  height: 25px;
}

.register-box input[type='submit'] {
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

.register-box input[type='submit']:hover {
  background-color: #117834;
}

.login-text {
  text-align: center;
}

.login-link {
  font-weight: 600;
  color: #000;
  font-size: 16px;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>