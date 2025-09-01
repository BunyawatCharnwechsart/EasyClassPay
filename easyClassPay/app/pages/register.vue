<template>
  <div class="container">

    <!-- Register Form -->
    <div class="form-box">
      
      <h2>สร้างบัญชีใหม่</h2>
      <p>กรุณาใส่ข้อมูลเพื่อทำการสมัครสมาชิกผู้ใช้</p>
      <form @submit.prevent="register">
        <label>ชื่อผู้ใช้</label>
        <input v-model="form.username" type="text" placeholder="กรุณากรอกชื่อผู้ใช้" required />

        <div class="row">
          <div class="col">
            <label>ชื่อจริง</label>
            <input v-model="form.firstname" type="text" placeholder="กรุณากรอกชื่อจริง" required />
          </div>

          <div class="col">
            <label>นามสกุล</label>
            <input v-model="form.lastname" type="text" placeholder="กรุณากรอกนามสกุล" required />
          </div>
        </div>

        <label>อีเมล</label>
        <input v-model="form.email" type="email" placeholder="กรุณากรอกอีเมล" required />

        <label>รหัสผ่าน</label>
        <input v-model="form.password" type="password" placeholder="กรุณากรอกรหัสผ่าน" required />

        <label>วันเกิด</label>
        <div class="dob">
          <select v-model="form.day" required>
            <option value="">วัน</option>
            <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
          </select>

          <select v-model="form.month" required>
            <option value="">เดือน</option>
            <option v-for="(m, index) in months" :key="index" :value="index + 1">
              {{ m }}
            </option>
          </select>

          <select v-model="form.year" required>
            <option value="">ปี</option>
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>

        <button type="submit" class="btn">ลงทะเบียน</button>
      </form>
      <a href="/" class="login-link">เข้าสู่ระบบ</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  day: "",
  month: "",
  year: "",
});

const months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

const years = [];
const yearNow = new Date().getFullYear();
for (let y = yearNow; y >= 1950; y--) {
  years.push(y);
}

function register() {
  alert(`สมัครสมาชิกสำเร็จ!\nชื่อ: ${form.value.firstname} ${form.value.lastname}`);
}

</script>

<style scoped>
body {
  margin: 0;
  font-family: Tahoma, sans-serif;
}

.container {
  background: url(/BGcolor.png) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  gap: 50px;
  padding: 20px;
  box-sizing: border-box;
}


.form-box {
  position: fixed;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 90%;
}



.form-box h2 {
  margin: 0 0 10px 0;
  text-align: center;
}

.form-box p {
  font-size: 14px;
  text-align: center;
  color: #555;
  margin-bottom: 20px;
}

label {
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.row {
  display: flex;
  gap: 10px;
}

.col {
  flex: 1;
}

.dob {
  display: flex;
  gap: 10px;
}

.dob select {
  flex: 1;
}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #28a745;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.btn:hover {
  background: #218838;
}

.login-link {
  margin-top: 15px;
  font-size: 80%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
</style>