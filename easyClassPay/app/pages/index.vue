<template>

<div class="BG">
    <div class="login-box">
    <h1>เข้าสู่ระบบ</h1>
        <form action="" method="post">
            <label for="username">ชื่อผู้ใช้ /อีเมล /หมายเลขโทรศัพท์</label>
            <input type="text" name="username" required>

            <label for="password">รหัสผ่าน</label>
            <input type="password" name="password" required>

            <div class="forgot-password">
            <NuxtLink to="/remember"  class="forgot-password">ลืมรหัสผ่าน</NuxtLink>
            </div>
            <input type="submit" value="เข้าสู่ระบบ">

            <div class="register-text">
            <NuxtLink to="/register" class="register-link">สมัครสมาชิก</NuxtLink>
            </div>

            <div class="google-login">
                <button type="button" @click="loginWithGoogle">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Icon" />
                <span class="google-text">Continue with Google</span>
                </button>
            </div>

        </form>
    </div>
</div>
</template>

<script setup>
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

.BG {
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
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid #000;
    padding: 40px 30px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    width: 450px;
    height: 750px;
    box-sizing: border-box;
    color: #000;
    margin: 0; 
}

.login-box h1 {
    text-align: center;
    margin-bottom: 50px;
}

.login-box label {
    display: block;
    margin-top: 15px;
    font-size: 0.9em;
}

.login-box input[type="text"],
.login-box input[type="password"] {
    width: 100%;
    height: 55px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 15px;
    border: 2px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1.2em;
}

.login-box input[type="submit"] {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-top: 30px;
    background-color: #159448;
    color: white;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1em;
}

.forgot-password {
    text-decoration: none;
    display: block;
    text-align: center;
    color: red;
    font-size: 1em;
    margin-top: 10px;
}

.register-text {
    text-align: center;
    margin-top: 25px;
}

.register-link {
    color: #000;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: 500;
}

.register-link:hover {
    color: #159448;
}

.google-login {
    margin-top: 25px;
    text-align: center;
}

.google-login button {
    background-color: white;
    border: 2px solid #ccc;
    color: #444;
    font-size: 1em;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    transition: 0.3s ease;
    box-sizing: border-box;
}


.google-login button:hover {
    border-color: #888;
    background-color: #f9f9f9;
}

.google-login img {
    width: 35px;
    height: 35px;
}

.google-text {
  flex: 1;
  text-align: left;
  font-size: 1.2em;
  font-weight: 500;
}
</style>