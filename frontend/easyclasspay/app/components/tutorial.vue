<template>

    <div class="flex mb-10 h-200 ">
        <!-- ภาพแนะนำ -->
        <div class="flex w-2/3">
            <div class=" w-screen m-20 ml-5 mr-10">
                <img
                    :src="images[currentIndex]"
                    alt="slideshow"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>

        <!-- คำแนะนำ -->
        <div class="bg-[#FFC93F] flex w-1/3 m-20 ml-0 mr-0 rounded-l-4xl">   
            <div class="flex flex-col justify-center ml-15">
                <p class="text-3xl font-bold mb-5">ยินดีต้อนรับสู่ EasyClassPay</p>
                <p class="flex text-xl ml-2">
                    แพลตฟอร์มจัดการบิลและการชำระเงินที่ออกแบบ <br>
                    มาเพื่อความสะดวกสบายของคุณ <br> 
                    ไม่ว่าจะเป็นการสร้างบิล กำหนดวันครบกำหนด <br>
                    ติดตามสถานะการจ่ายหรือรับการแจ้งเตือนอัตโนมัติ <br> 
                    คุณจะไม่พลาดทุกการชำระอีกต่อไปนอกจากนี้ยัง <br>
                    สามารถอัปโหลดใบเสร็จเพื่อยืนยันการชำระแชร์ <br>
                    ข้อมูลกับเพื่อน และเชื่อมต่อผู้ใช้งานได้ง่ายๆ <br>
                    ทั้งหมดนี้ในระบบเดียวที่ใช้งานง่าย <br> 
                    ปลอดภัย และทันสมัย
                </p>
            </div> 
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

    const images = [
        "/tur2.png",
        "/tur3.png",
        "/tur1.png",
    ];

    const currentIndex = ref(0);
    let interval = null;

    onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
    }, 1500);
    });

    onUnmounted(() => {
        clearInterval(interval);
    });

</script>