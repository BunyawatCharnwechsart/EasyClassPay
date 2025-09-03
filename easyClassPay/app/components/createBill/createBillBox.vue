<template>
    
    <div class="container-CBB">
        <div class="createBill">
            <div class="block-createCBB"></div>
            <div class="block-input">
                <div class="inputCBB">
                    <h2>ชื่อบิล</h2>
                    <input type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อย">
                </div>
                <div class="inputCBB">
                    <h2>ยอดบิล</h2>
                    <input type="text" placeholder="กรุณาใส่ยอดเงินให้พี่หมีหน่อย">
                </div>
            </div>
        </div>

        <div class="friends-bill">
            <div class="head-list">
                <p>รายชื่อที่อยู่ในบิล</p>
                <button><img src="/plus.png">เพิ่มเพื่อน</button>
            </div>

            <div class="gray-block">
                <p>ชื่อ/อีเมล</p>
            </div>

            <div class="list-friend">

            </div>
        </div>
    </div>
    
        
    


</template>

<style scoped>

    .container-CBB {
        width: 65%;
    }

    .createBill {
        background: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-radius: 12px;
        width: 100%;
    }

    .block-createCBB {
        background: #FFC93F;
        height: 49px;
        border-radius: 10px 10px 100px 100px;
    }
    
    .block-input {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .inputCBB {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        padding: 50px;   
    }

    .inputCBB input {
        border-radius: 10px;
        border:1px solid #159448;
        height: 60px;
        width: 250px;
        text-align: center;
        font-size: 18px;
    }

    .friends-bill {
        background: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-radius: 12px;
        width: 100%;
        margin-top: 20px;
    }

    .head-list {
        display: flex;
        padding: 30px;
        justify-content: space-between;
        font-size: 24px;
    }

    .head-list button {
        cursor: pointer;
        font-size: 24px;
        height: 45px;
        width: 150px;
        border: none;
        border-radius: 10px;
        background: #FFBC12;
    }

    .head-list button img {
        padding-right: 10px;
    }

    .gray-block {
        margin: 0px 20px 0px 20px;
        background: #EBEBEB;
        border-radius: 10px 10px 0px 0px;
    }

    .gray-block p {
        padding: 30px;
        font-size: 20px;
        font-weight: bold;
    }

    .list-friend {
        height: 70vh;
    }
</style>