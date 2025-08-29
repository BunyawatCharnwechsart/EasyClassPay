<template>

    <div class="menu-ui">
        <div class="menu-kaptang" v-for="(imgSrc, index) in menuImg" :key="index">
            <img :src="imgSrc" alt="menu image">
            <h1>สร้างบิลเก็บตังค์</h1>
            <p>ไม่ต้องคิดเยอะเดี๋ยวพี่หมี <br> ช่วยเก็บในนะค้าบบ</p>
        </div>
    </div>

</template>

<script setup>

const menuImg = [
{
    img : '/kaptang.png',
    title : 'สร้างบิลเก็บตังค์',
    desc: 'ไม่ต้องคิดเยอะเดี๋ยวพี่หมี <br> ช่วยเก็บในนะค้าบบ'
},
{
    img : '/createbill.png',
    title : 
},
{
    img : '/billM.png'
}    
]

</script>

<style>
.menu-ui {
        display: flex;
    }
</style>