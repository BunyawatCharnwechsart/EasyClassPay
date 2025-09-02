<template>
    <div>
        <navbar />
        <headtext />
        <div class="block-CB">
            <createBillBox />
            <seclectPay />
        </div>
        <about />
    </div>     
</template>

<script setup>
import navbar from '~/components/navbar.vue';
import headtext from '~/components/createBill/headtext.vue';
import createBillBox from '~/components/createBill/createBillBox.vue';
import about from '~/components/about.vue';
import seclectPay from '~/components/seclectPay.vue';

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

    * {
        font-family: 'Bai Jamjuree', sans-serif;
    }

    .block-CB {
        display: flex;
        gap: 2%;
        margin-top: 1%;
        margin-left: 5%;
    }
</style>