<template>
    <div class="flex">
        <nuxt-link v-for="(item, index) in detail" :key="index" class="flex flex-col justify-center items-center gap-4 w-1/3 h-140 cursor-pointer" :class="item.bg" :to="item.link">
                <img :src="item.img" class="w-30 h-30 object-contain" />
                <h1 class="font-bold text-4xl mt-10">{{ item.head }}</h1>
                <p class="text-lg text-center" v-html="item.text"></p>
        </nuxt-link>
    </div>
</template>

<script setup>
const detail = [
    {
        img: '/kaptang.png',
        head: 'สร้างบิลเก็บตังค์',
        text: 'ไม่ต้องคิดเยอะเดี๋ยวพี่ <br> หมีช่วยเก็บในนะค้าบบ',
        bg: 'bg-[#FFC93F]',
        link: '/createBill'
    },
    {
        img: '/billM.png',
        head: 'บิลแบบรายเดือน',
        text: 'ตั้งครั้งเดียวพี่หมี <br> แจ้งเองตรงเวลาเป๊ะๆ',
        bg: 'bg-[#FFBC12]',
        link: '/monthBill'
    },
    {
        img: '/billM.png',
        head: 'บิลทั้งหมด',
        text: 'บิลทั้งหมดที่สร้างพี่หมี <br> เอาไว้ในนี้หมดเลย',
        bg: 'bg-[#FFC93F]',
        link: '/allBill'
    }
]
</script>
