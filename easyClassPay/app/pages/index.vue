<template>
    <div class="login-box">
        <h2>เข้าสู่ระบบ</h2>
        <form action="" method="post">
            
            <span>ชื่อผู้ใช้ /อีเมล /หมายเลขโทรศัพท์</span>
            <input type="text" name="username" required>

            <span>รหัสผ่าน</span>
            <input type="password" name="password" required>

            <span>ลืมรหัสผ่าน</span>
            <input type="submit" value="เข้าสู่ระบบ">
        </form>
    </div>
</template>

<style>

    body {
        font-family: Arial, sans-serif;
        background-image: url(/background.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-box {
        background: rgba(255, 255, 255, 0.2); /* โปร่งใสเล็กน้อย */
        backdrop-filter: blur(10px);
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        width: 300px;
        height: 450px;
        margin: 15% 15% 15% 100% ;
    }

    .login-box h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .login-box input[type="text"],
    .login-box input[type="password"] {
        width: 80%;
        padding: 10px;
        margin: 10px 0;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

      .login-box input[type="submit"] {
        width: 100%;
        height: 50px;
        padding: 10px;
        background-color: #159448;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .login-box .register-link {
        text-align: center;
        margin-top: 15px;
        font-size: 0.9em;
    }

      .login-box .register-link a {
        color: #007bff;
        text-decoration: none;
    }

    .login-box .register-link a:hover {
        text-decoration: underline;
    }
</style>