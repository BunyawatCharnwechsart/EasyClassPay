<template>

    <nav class="nav-bar">
        <div class="head">
            <img src="/LOGO.png" alt="LOGO">
            <p class="head-text">Easy Class Pay</p>
        </div>
        <ul class="list-menu">
            <li><nuxt-link to="/createBill">สร้างบิลเก็บตังค์</nuxt-link></li>
            <li><nuxt-link to="/printYourSelf">พิมพ์รายการเอง</nuxt-link></li>
            <li><nuxt-link to="/monthlyBill">บิลแบบรายเดือน</nuxt-link></li>
            <li><nuxt-link to="/allBill">บิลทั้งหมด</nuxt-link></li>
        </ul>
        <div class="notification">
            <img class="bell" src="/bell.png" alt="bell">
            <img class="profile" src="/testProfile.png" alt="profile">
        </div>
    </nav>

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
      
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    align-content: center;
    font-family: 'Bai Jamjuree', sans-serif;
}

.nav-bar {
    display: flex;
    padding: 10px;
    align-items: center;
    background-color: #FFC93F;
}

.head {
    display: flex;
    gap: 40px;
}

.head img {
    width: 50px;
    height: auto;
    margin-left: 30px;
}

.head-text {
    font-size: 24px;
    font-weight: bold;
}

.list-menu {
    display: flex;
    padding-left: 40px;
    gap: 20px;
}

.list-menu li {
    color: #fff;
    display: grid;
    place-content: center;
    list-style: none;
}

.list-menu li a {
    position: relative;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
}
    
.list-menu li a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    border-radius: 5px;
    transform: scaleX(0);
    transition: transform 0.5s ease;
    bottom: 0;
    left: 0;
    transform-origin: left;
}

.list-menu li a:hover::before {
    transform: scaleX(1);
}

.notification{
    display: flex;
    gap: 30px;
    margin-left: auto;
    margin-right: 30px;
}

.notification img {
    align-self: center;
    cursor: pointer;
}

.bell {
    width: 30px;
    height: 30px;
}

</style>