<template>

    <div class="head-text">
        <div class="img-HT">
            <img src="/bell.png">
        </div>

        <div class="text-HT">
            <h1>สร้างบิลเก็บตังค์</h1>
            <p>ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ</p>
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

<style scoped>

    .head-text {
        padding-top : 1%;
        padding-left: 5%;
        display: flex;
        gap: 3%;
    }

    .text-HT {
        display: flex;
        gap: 10px;
        align-items: baseline; /* ทำให้ h1 และ p อยู่ baseline เดียวกัน */
    }

</style>