<template>
    
    <div class="container-createCBB">
        <div class="block-createCBB"></div>
        <div class="block-input">
            <div class="create-input">
                <p>ชื่อบิล</p>
                <input type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อยครับ">    
            </div>
            <div class="create-input">
                <p>ยอดบิล</p>
                <input type="text" placeholder="กรุณณาใส่ยอดเงิน"> 
            </div>
        </div>
    </div>

</template>

<style scoped>
    .container-createCBB {
        background: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-radius: 12px;
        width: 65%;
    }
    
    .block-createCBB {
        background: #FFC93F;
        height: 49px;
        border-radius: 10px 10px 100px 100px;
    }

    .block-input {
        display: flex;
        justify-content: space-between;
        padding: 30px;
        flex-wrap: wrap;
    }

    .create-input {
        display: flex;
        gap: 20px;
    }

    .create-input p {
        font-weight: bold;
        font-size: 26px;
    }

    .create-input input {
        height: 60px;
        width: 285px;
        border-radius: 10px;
        border: 1px solid #159448;
        text-align: center;
        font-size: 20px;
    }

</style>