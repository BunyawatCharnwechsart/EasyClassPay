<template>
    
    <div class="container-CBB">
        <div class="createBill">
            <div class="block-createCBB"></div>
            <div class="block-input">
                <div class="inputCBB">
                    <p>ชื่อบิล</p>
                    <input type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อย">
                </div>
                <div class="inputCBB">
                    <p>ยอดบิล</p>
                    <input type="text" placeholder="กรุณาใส่ยอดเงินให้พี่หมีหน่อย">
                </div>
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
    }

    .inputCBB {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        padding: 50px;
    }

    .inputCBB p {
        font-weight: bold;
        font-size: 30px;
    }

    .inputCBB input {
        border-radius: 10px;
        border:1px solid #159448;
        height: 60px;
        width: 280px;
        text-align: center;
        font-size: 18px;
    }



</style>