<template>
    <div class="boxPayMent">
        <div class="headbar"><p>เลือกวิธีชำระเงิน</p></div>
        
        <div class="PayMent-btn">
            <nuxt-link to="/total-bill">ถัดไป <img src="/arrow-r.png"></nuxt-link>
        </div>
    </div>
</template>

<style scoped>
    .boxPayMent {
        background-color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 12px;
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
    }

    .headbar {
        background: #FFC93F;
        height: 100px;
        width: 100%;
        border-radius: 12px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }

    .PayMent-btn {
        display: flex;
        margin: 30px;
        margin-top: auto;      /* ดันปุ่มไปล่างสุด */
    }

    .PayMent-btn a {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 100%;
        border: none;
        border-radius: 10px;
        height: 45px;
        background: #159448;
        color: white;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
    }

    .PayMent-btn a img {
        margin-left: 5px;
    }
</style>
