<template>

    <nav class="nav-bar">
        <div class="head">
            <img src="/logo1.png" alt="LOGO">
            <p class="head-text">Easy Class Pay</p>
        </div>
        <ul class="list-menu">
            <li><nuxt-link to="/createBill">สร้างบิลเก็บตังค์</nuxt-link></li>
            <li><nuxt-link to="/printYourSelf">พิมพ์รายการเอง</nuxt-link></li>
            <li><nuxt-link to="/monthlyBill">บิลแบบรายเดือน</nuxt-link></li>
            <li><nuxt-link to="/allBill">บิลทั้งหมด</nuxt-link></li>
        </ul>
        <div class="profile-img">
            <img src="/testProfile.png" alt="profile">
        </div>
    </nav>

</template>

<style>
      
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    align-content: center;
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
    list-style: none;
    text-decoration: none;
    color: black;
}

.list-menu li a {
    align-content: center;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
}

.profile-img {
    display: flex;
    justify-self: end;
}

</style>