<template>

    <div class="head-text">
        <h1>สร้างบิลเก็บตังค์</h1>
        <p>ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ </p>
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
    *{
        margin: 0px;
        padding-top: 1%;
        box-sizing: border-box;
    }

    .head-text {
        display: flex;
        align-items: baseline;
        padding-left: 6%;
        gap: 10px;
    }

    .head-text h1 {
        font-size: 24px;
        margin: 0;
    }

    .head-text p {
        font-size: 18px;
        margin: 0;
    }

</style>