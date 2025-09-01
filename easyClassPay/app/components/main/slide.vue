<template>

    <div class="slideshow-container">
        <!-- สไลด์รูป -->
        <img
        v-for="(image, index) in slideImages"
        :key="index"
        v-show="currentSlide === index"
        :src="image"
        class="slide-image"
        />
    </div>
    
</template>


<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const slideImages = [
        '/ADS1.png',
        '/ADS2.png',
        '/ADS3.png',
        '/ADS4.png'
    ];

    const currentSlide = ref(0);
    let slideInterval = null;

    // ไปสไลด์ถัดไป
    function nextSlide() {
        currentSlide.value = (currentSlide.value + 1) % slideImages.length;
    }

    // ตั้ง Interval ให้สไลด์เปลี่ยนอัตโนมัติทุก 2 วิ
    onMounted(() => {
        slideInterval = setInterval(nextSlide, 2000);
    });

    // ล้าง Interval เวลา Component ถูกทำลาย
    onUnmounted(() => {
        clearInterval(slideInterval);
    });

</script>

<style>

    .slide-image {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        display: block;
        transition: opacity 0.5s ease-in-out;
    }

</style>
