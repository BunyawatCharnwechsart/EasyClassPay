<template>

    <div class="container-enter" >
       <div class="block"></div>
       <div class="main-block">
            <div class="block-input">
                <h1>ชื่อบิล</h1>
                <input type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อย">
            </div>

            <div class="block-input">
                <h1>ยอดบิล</h1>
                <input type="text" placeholder="กรุณาใส่ยอดเงิน">
            </div>
        </div>
    </div>

</template>

<style>
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    .container-enter {
        margin-top: 10px;
        margin-left: 6%;
        width: 65%;
        background-color: white;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    }

    .block {
        background-color: #FFC93F;
        height: 49px;
        border-radius: 10px 10px 100px 100px;
    }

    .main-block {
        display: flex;
        justify-content: center;
        gap: 10%;
        padding: 60px;
    }

    .block-input {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    
    .block-input h1 {
        font-size: 36px;
    }

    input {
        border-radius: 10px;
        border: 1px solid #159448;
        height: 60px;
        width: 300px;
        text-align: center;       
        line-height: 60px;
        font-size: 18px;
    }

    input::placeholder {
        font-size: 18px;
    }

</style>