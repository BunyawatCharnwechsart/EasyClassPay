<template>
    <div class="boxPayMent">
        <div class="headbar"><p>เลือกวิธีชำระเงิน</p></div>

        <div class="seclect-banking">
            <div class="box-seclect">
                <img src="/bank-logo.png">
                <p>เลือกธนาคาร</p>
            </div>
        </div>

        <div class="seclect-prompay">
            <div class="box-seclect">
                <img src="/prompay-logo.png">
                <p>พร้อมเพย์</p>
            </div>
        </div>
        
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

    .box-seclect {
        cursor: pointer;
        display: flex;
        gap: 20px;
        margin: 20px;
        padding: 20px;
        border: 1px solid black;
        font-size: 24px;
        font-weight: bold;
    }

    .box-seclect img {
        width: 40px;
        height: 40px;
    }

    .PayMent-btn {
        display: flex;
        margin: 30px;
        margin-top: auto;
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
