<template>
  <div class="BGreset">
    <div class="reset-box">
      <h1>ทำการรีเซ็ตรหัสผ่าน</h1>
      <p>กรุณากรอกอีเมลเพื่อทำการรีเซ็ตรหัสผ่าน</p>

      <form action="" method="post">
        <label for="email">อีเมล</label>
        <input
          type="email"
          name="email"
          placeholder="กรุณากรอกอีเมล"
          required
        />
      </form>

      <div class="form-bottom">
        <button type="submit" class="submit-prereset">ส่งรหัสผ่านทางอีเมล</button>
        <div class="login-text">
          <NuxtLink to="/" class="login-link">เข้าสู่ระบบ</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
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

.BGreset{
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

.reset-box{
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

.reset-box h1 {
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 8px;
}

.reset-box p {
    text-align: center;
    font-size: 16px;
    margin-bottom: 25px;
    color: #555;
}

.reset-box label {
    display: block;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 6px;
}

.reset-box input[type='email'] {
    width: 100%;
    height: 48px;
    padding: 0 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    color: #333;
}

.reset-box input[type='submit'] {
    width: 100%;
    height: 48px;
    background-color: #159448;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 18px;
    transition: background-color 0.3s ease;
}

.reset-box input[type='submit']:hover {
    background-color: #117834;
}

.form-bottom {
  margin-top: auto;
}

.submit-prereset {
  width: 100%;
  height: 48px;
  background-color: #159448;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 18px;
  transition: background-color 0.3s ease;
}

.submit-prereset:hover {
  background-color: #117834;
}


.login-text {
    text-align: center;
}

.login-link-reset {
    font-weight: 600;
    color: #000;
    font-size: 16px;
    text-decoration: none;
}

.login-link-reset:hover {
  text-decoration: underline;
}
</style>