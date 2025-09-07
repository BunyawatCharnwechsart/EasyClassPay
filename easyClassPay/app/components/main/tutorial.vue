<template>

    <div class="Box-tutorial">
        <div class="vdio-tutorial">
            <div class="box-vdioTUR">
                <img
                v-for="(image, index) in slideImages"
                :key="index"
                v-show="currentSlide === index"
                :src="image"
                class="slide-image"
                />
            </div>
        </div>

        <div class="text-tutorial">
            <div class="box-textTUR">
                <h1>แนะนำ</h1>
                <p>เว็ปไซต์ของเรามีระบบที่เลือกใช้ได้สดวกสบาย <br> สดวกรวดเร็ว ทั้งการสร้างบิลเอง พิมพ์รายการเก็บเงิน <br> ทั้งรายเดือน และเพื่อนของเรา</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="js">
import { ref, onMounted, onUnmounted } from 'vue';

    const slideImages = [
        '/tur1.png',
        '/tur2.png',
        '/tur3.png'
    ];

    const currentSlide = ref(0);
    let slideInterval = null;

    // ไปสไลด์ถัดไป
    function nextSlide() {
        currentSlide.value = (currentSlide.value + 1) % slideImages.length;
    }

    // ตั้ง Interval ให้สไลด์เปลี่ยนอัตโนมัติทุก 2 วิ
    onMounted(() => {
        slideInterval = setInterval(nextSlide, 2500);
    });

    // ล้าง Interval เวลา Component ถูกทำลาย
    onUnmounted(() => {
        clearInterval(slideInterval);
    });
</script>

<style scoped>

    .Box-tutorial {
        display: flex;
    }

    .vdio-tutorial {
        flex: 6;
    }

    .box-vdioTUR {
        margin: 20px;
    }

    .box-vdioTUR img {
        height: 800px;
    }

    .text-tutorial {
        flex: 4;
    }

    .text-tutorial {
        padding: 40px 0px 120px 40px;
        display: flex;
    }

    .box-textTUR {
        display: flex;
        gap: 10px;
        flex-direction: column;
        background: #FFC93F;
        height: 700px;
        width: 600px;
        border-radius: 40px 0px 0px 40px;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    }

    .box-textTUR h1 {
        font-size: 40px;
        padding-left: 40px;
        align-self: baseline;
    }

    .box-textTUR p {
        font-size: 24px;
    }
</style>