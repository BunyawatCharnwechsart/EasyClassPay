<template>
    <div>
        <navbar />
        <div class="head-text">
            <div class="btn-back">
                <button><nuxt-link to="/main"><img src="/back-btn.png">ย้อนกลับ</nuxt-link></button>
            </div>

            <div class="text-HT">
                <h1>สร้างบิลเก็บตังค์</h1>
                <p>ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ</p>
            </div>
        </div>
        <div class="block-CB">
            <createBillBox />
            <seclectPay />
        </div>
        <about />
    </div>     
</template>

<script setup>
import navbar from '~/components/navbar.vue';
import createBillBox from '~/components/createBill/createBillBox.vue';
import about from '~/components/about.vue';
import seclectPay from '~/components/createBill/seclectPay.vue';

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
        gap: 4%;
        margin-top: 1%;
        margin-left: 5%;
        margin-bottom: 5%;
    }

    .head-text {
        padding-top : 1%;
        padding-left: 5%;
        display: flex;
        gap: 3%;
    }

    .text-HT {
        display: flex;
        gap: 10px;
        align-items: baseline;
    }

    .btn-back button {
        display: flex;              
        align-items: center;       
        justify-content: center;   
        gap: 8px;                   
        padding: 10px;
        cursor: pointer;
        background: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border: none;
        width: 130px;
        height: 55px;
        border-radius: 10px;
    }

    .btn-back button a {
        display: flex;              
        align-items: center;
        gap: 6px;                   
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
    }


</style>