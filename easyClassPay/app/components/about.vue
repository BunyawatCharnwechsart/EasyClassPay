<template>

    <footer>
        <div class="head-footer">
            <img src="\Bear.png">
            <h1>EasyClassPay</h1>
            
        </div>
        
        <div class="text-about">
            <p>เกี่ยวกับเรา</p>
            <p>ช่องทางติดต่อ</p>
        </div>

        <div class="textInAbout">
            <div class="about-text">
                <p>หน้าเกี่ยวกับเรา</p>
                <p>หน้าติดต่อเรา</p>
                <p>หน้าเงื่อนไขการใช้งาน</p>
                <p>นโยบายความเป็นส่วนตัว</p>
                <p>คำถามที่พบบ่อย</p>
            </div>

            <div class="link">
                <img src="/facebook.png">
                <img src="/line.png">
                <img src="/email.png">
            </div>
        </div>
    </footer>

</template>

<style scoped>

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        background-color: black;
        border-radius: 16px 16px 0px 0px;
        height: 50vh;
        padding: 50px;
        gap: 2rem;
    }

    .head-footer {
        display: flex;
        color : white;
        gap: 1rem;
    }

    .text-about {
        display: flex;
        color : white;
        justify-content: space-between;
    }

    .text-about p {
        padding: 0rem 10rem 0rem 5rem;
        font-weight: bold;
        font-size : 24px;
    }

    .textInAbout {
        display: flex;
        justify-content: space-between;
        padding: 0rem 8rem 0rem 5rem;
    }

    .about-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        color : white;
    }

    .link {
        display: flex;
        gap: 2rem;
    }

    .link img {
        cursor: pointer;
        width: 45px;
        height: 45px;
    }
</style>