<template>
    <div class="boxPayMent">
        <div class="headbar"><p>เลือกวิธีชำระเงิน</p></div>

        <div class="btn-container">
            <button><img src="/bank-logo.png">เลือกธนาคาร</button>

            <button><img src="/prompay-logo.png">พร้อมเพย์</button>

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

    .btn-container {
        display: flex;
        flex-direction: column;
        margin: 20px;
        gap: 20px;
    }

    .btn-container button {
        border: 1px solid black;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        height: 90px;
        font-size: 24px;
        font-weight: bold;
        background: none;
        transition: background-color 0.5s ease;
    }

    .btn-container button:hover {
        background: #fce0b7;
    }

    .btn-container button img {
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
