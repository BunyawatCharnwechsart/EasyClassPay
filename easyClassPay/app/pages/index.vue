<template>

<div class="BG">
<div class="login-box">
    <h1>เข้าสู่ระบบ</h1>
    <form action="" method="post">
     <label for="username">ชื่อผู้ใช้ /อีเมล /หมายเลขโทรศัพท์</label>
      <input type="text" name="username" required>
     <label for="password">รหัสผ่าน</label>
      <input type="password" name="password" required>
      <NuxtLink to="/remember">ลืมรหัสผ่าน</NuxtLink>
      <input type="submit" value="เข้าสู่ระบบ">
      <div class="Register-text">
        <NuxtLink to="/register">สมัครสมาชิก</NuxtLink>
      </div>
    </form>
    </div>
</div>
</template>

<style>


.BG {
      font-family: Arial, sans-serif;
      background-image: url(/background.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: static;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100vh;
      padding-right: 150px;
      margin: 0;
    }

    .login-box {
      background: rgba(255, 255, 255, 0.2); /* โปร่งใสเล็กน้อย */
      border: 2px solid #000;
      padding: 40px 30px;
      box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
      width: 400px;
      height: 650px;
      box-sizing: border-box;
      color: #000;
      margin: 0; 
    }

    .login-box h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .login-box label {
      display: block;
      margin-top: 15px;
      font-size: 0.9em;
    }

    .login-box input[type="text"],
    .login-box input[type="password"] {
      width: 100%;
      height: 50px;
      padding: 10px;
      margin-top: 8px;
      margin-bottom: 15px;
      border: 2px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      font-size: 1em;
    }

    .login-box input[type="submit"] {
      width: 100%;
      height: 50px;
      padding: 10px;
      margin-top: 10px;
      background-color: #159448;
      color: white;
      border: none;
      border-radius: 5px;
      box-sizing: border-box;
      font-size: 1em;
    }
    form a {
        text-decoration:none ;
        color:red;
        text-align: center;
        margin: 40%;
        font-size: 0.9em;
    }
    .Register-text{
        text-decoration: none;
        text-align: center;
        margin-top: 15px;
        font-size: 0.9em;
    }
    .Register-text a{
        color: #000;
    }
    
</style>