<template>

<div class="bg-color">
    <div class="container">
        <h1>สร้างบัญชีใหม่</h1>
         <div class="form-group">
          <input type="text" placeholder="ชื่อผู้ใช้" v-model="username" />
        </div>

        <div class="form-group">
        <input type="text" placeholder="ชื่อ-นามสกุล" v-model="fullname" />
        </div>

        <div class="form-group">
        <input type="email" placeholder="อีเมล" v-model="email" />
        </div>

        <div class="form-group">
        <input type="password" placeholder="รหัสผ่าน" v-model="password" />
        </div>

        <div class="form-group">
        <label><b>Date of birth</b></label>
        <div class="dob">

        <!-- วัน -->
        <select id="day" v-model="day">
            <option value="" disabled selected hidden>วัน</option>
            <option v-for="d in daysInMonth" :key="d" :value="d">{{ d }}</option>
        </select>

        <!-- เดือน -->
        <select id="month" v-model="month">
            <option value="" disabled selected hidden>เดือน</option>
            <option v-for="(m, index) in months" :key="index" :value="index+1">{{ m }}</option>
        </select>

        <!-- ปี -->
        <select id="year" v-model="year">
            <option value="" disabled selected hidden>ปี</option>
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
        </select>
        </div>

        </div>
        <button class="btn" @click="register">ลงทะเบียน</button>
        <div class="login-text">
            <NuxtLink to="/" class="login-link">เข้าสู่ระบบ</NuxtLink>
        </div>
    
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      fullname: "",
      email: "",
      password: "",
      day: "",
      month: "",
      year: "",
      months: [
        "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน",
        "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"
      ]
    };
  },
  computed: {
    years() {
      const currentYear = new Date().getFullYear();
      let arr = [];
      for (let y = currentYear; y >= 1900; y--) {
        arr.push(y);
      }
      return arr;
    },
    daysInMonth() {
      if (!this.month || !this.year) return Array.from({ length: 31 }, (_, i) => i + 1);
      return Array.from({ length: new Date(this.year, this.month, 0).getDate() }, (_, i) => i + 1);
    }
  },
  methods: {
    register() {
      alert(`สมัครสมาชิก: 
        ชื่อผู้ใช้: ${this.username}
        ชื่อ-นามสกุล: ${this.fullname}
        อีเมล: ${this.email}
        วันเกิด: ${this.day}/${this.month}/${this.year}`);
    }
  }
}
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
    }
  ]
})
</script>

<style>
*{
    font-family: 'Bai Jamjuree', sans-serif;
}

.bg-color {
  margin: 0;
  background-image: url(/BGcolor.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: rgba(255, 255, 255, 0.4);
  padding: 40px;
  border: 1px solid #333;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.3);
  width: 800px;
  height: 600px;
  text-align: center;

}
.container h2 {
  margin-bottom: 20px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

input, select {
  width: 776px;
  height: 20px;
  padding: 12px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 17px;
  margin-top: 20px;
}

.dob {
  display: flex;
  gap: 10px;

}

.dob select {
  flex: 1;
  font-size: 17px;
  height: 50px;
}

.btn {
  width: 350px;
  height: 60px;
  background-color: #0b9e3f;
  border: none;
  color: white;
  padding: 12px;
  font-size: 18px;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
}

.btn:hover {
  background-color: #088c36;
}

select {
  color: #555;
}

select option[disabled][hidden] {
  color: #aaa;
}

.login-link {
  color: black;
  font-weight: bold;
  text-decoration: underline;
}

.login-text{
  text-align: center;
  margin-top: 8px;
}

</style>