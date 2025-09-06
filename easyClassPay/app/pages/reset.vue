<template>
    <div class="resetpass">
        <div class="resetpass-box">
         <form @submit.prevent="handleSubmit" class="reset-form">
            <h1>รีเซ็ตรหัสผ่าน</h1>
            <p>กรุณากรอกรหัสยืนยัน</p>

            <label for="verifyCode">รหัสยืนยัน</label>
            <input
            id="verifyCode"
            type="text"
            v-model="verifyCode"
            placeholder="กรุณากรอกรหัสยืนยัน"
            required
            />
            <label for="newPassword">รหัสผ่านใหม่</label>
            <input
            id="newPassword"
            type="password"
            v-model="newPassword"
            placeholder="กรุณากรอกรหัสผ่านใหม่"
            required
            />

            <label for="confirmPassword">ยืนยันรหัสผ่านใหม่</label>
            <input
            id="confirmPassword"
            type="password"
            v-model="confirmPassword"
            placeholder="กรุณากรอกยืนยันรหัสผ่านใหม่"
            required
            />

            <button type="submit" class="btn-confirm">ยืนยัน</button>
         </form>

            <NuxtLink to="/" class="login-link">เข้าสู่ระบบ</NuxtLink>

        </div>

    </div>


</template>

<script setup>
import { ref } from 'vue'

const verifyCode = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

function handleSubmit() {
  if (newPassword.value !== confirmPassword.value) {
    alert('รหัสผ่านใหม่และยืนยันรหัสผ่านใหม่ไม่ตรงกัน')
    return
  }
  // logic reset password here
  alert('ยืนยันเรียบร้อย')
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


<style scoped>
* {
  font-family: 'Bai Jamjuree', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resetpass {
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

.resetpass-box {
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

.reset-form {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.reset-form h1 {
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 8px;
}

.reset-form p {
  text-align: center;
  font-size: 16px;
  margin-bottom: 35px;
  color: #555;
}

.reset-form label {
  display: block;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 6px;
}

.reset-form input {
  height: 44px;
  padding: 0 15px;
  border: 1px solid #888;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 30px;
  color: #333;
}

.btn-confirm {
  width: 100%;
  height: 48px;
  background-color: #159448;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 30%;
  transition: background-color 0.3s ease;
}

.btn-confirm:hover {
  background-color: #117834;
}

.login-link {
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: black;
  text-decoration: none;
  margin: 12px auto 0;
  cursor: pointer;
}

.login-link:hover {
  text-decoration: underline;
}
</style>