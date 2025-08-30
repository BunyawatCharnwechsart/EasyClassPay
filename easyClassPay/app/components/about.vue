<template>

    <footer>
        <div class="container">
            <img src="/Bear.png" alt="Bear">
            <h1>EasyClassPay</h1>
        </div>
        <p>เกี่ยวกับ</p>
        <div class="list">
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
        padding-top: 100px;
    }

    .container {
        display: flex;
        justify-content: center;
        gap: 20px;
        color: white;
    }

    h1 {
        text-align: center;
        color: white;
    }

    p {
        color: white;
        font-size: 24px;
    }


</style>