<!-- File: Popup.vue -->
<template>
  <div v-if="isOpen" class="popup-wrapper">
    <div class="popup-box">
      <button class="btn-close" @click="close">X</button>
      <h1>kuy</h1>
      
    </div>
    <div class="overlay" @click="close"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

// method เปิด/ปิด
function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

// expose method ให้ parent เรียก
defineExpose({ open, close })
</script>

<style scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.popup-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
  z-index: 1010;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
