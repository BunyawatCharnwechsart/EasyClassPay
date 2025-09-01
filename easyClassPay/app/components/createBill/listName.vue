<template>

    <div class="container-list">
        <div class="head-list">
            <p>รายชื่อคนที่อยู่ในบิล</p>
            <button class="addFriend"><img src="/plus.png">เพิ่มเพื่อน</button>
        </div>

        <div class="BGgray">
            <p>ชื่อ / อีเมล</p>
        </div>
    </div>

</template>

<style scoped>

    .container-list {
        margin-top: 10px;
        margin-left: 6%;
        margin-bottom: 10%;
        width: 65%;
        height: 90vh;
        background-color: white;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        align-content: baseline;
    }

    .head-list {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    .head-list p {
        font-size: 24px;
    }

    .addFriend {
        display: flex;                
        align-items: center;         
        justify-content: center;     
        gap: 8px;                     
        background-color: #FFBC12;
        border: none;
        height: 45px;
        width: 140px;
        border-radius: 10px;
        font-size: 16px;             
        font-weight: bold;            
        cursor: pointer;             
    }

    .BGgray {
        margin: 10px;
        background: #EBEBEB;
        height: 60px;
        border-radius: 10px 10px 0px 0px;
    }

    .BGgray p {
        padding-left: 50px;
    }
</style>