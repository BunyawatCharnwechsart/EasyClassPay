<template>
  <div class="flex justify-center items-center min-h-screen bg-red-100 font-Bai-Jamjuree">

    <!-- หน้า Upload -->
    <div v-if="!isSuccess" class="bg-white rounded-2xl shadow-xl border border-red-400 w-[380px] p-12 text-center">
      <h2 class="text-2xl font-bold mb-4 text-red-700">แนบสลิปจ่ายเงิน</h2>

      <div class="text-red-700 text-left space-y-2 mb-6 p-2">
        <p><span class="mb-10 font-semibold">ชื่อบัญชี :</span> นายบุญณรงค์ ชาญเวชศาสตร์</p>
        <p><span class="mt-10 font-semibold">เลขที่บัญชีผู้รับเงิน :</span> 555XXXXXX</p>
        <p><span class="mt-10 mb-10 font-semibold">จำนวนเงินที่ต้องการชำระ :</span> 1500 บาท</p>
      </div>

      <!-- อัปโหลดไฟล์สลิป -->
      <label
        for="file-upload"
        class="cursor-pointer flex flex-col justify-center items-center w-full h-48 border-2 border-dashed border-red-300 rounded-lg bg-red-50 hover:bg-red-100 transition"
      >
        <img src="https://www.svgrepo.com/show/408362/upload.svg" alt="upload" class="w-10 h-10 opacity-60 mb-2" />
        <p class="text-red-500 text-sm">เลือกไฟล์สลิป<br />เพื่ออัพโหลด</p>
        <input id="file-upload" type="file" class="hidden" @change="onFileChange" />
      </label>

      <div class="flex flex-col space-y-3 mt-6">
        <button
          class="bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-semibold transition"
          @click="submitSlip"
        >
          ส่งสลิป
        </button>
        <button
          class="text-red-500 hover:text-red-700 font-medium"
          @click="cancel"
        >
          ยกเลิก
        </button>
      </div>
    </div>

    <!-- popup ใหม่ แบบ overlay -->
    <transition name="fade">
      <div 
        v-if="isSuccess"
        class="fixed inset-0 flex justify-center items-center bg-red-900/40 z-50"
        @click.self="closePopup"
      >
        <div class="bg-white rounded-2xl shadow-xl w-[320px] p-8 text-center flex flex-col items-center">
          <div class="bg-red-500 rounded-full w-16 h-16 flex justify-center items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-red-800 mb-2">ส่งสลิปเรียบร้อย</h2>
          <img v-if="filePreview" :src="filePreview" alt="Slip preview" class="w-32 h-32 object-cover rounded-md mb-2"/>
          <p class="text-red-400 text-sm">กดที่พื้นหลังเพื่อปิด popup</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from "vue";

const file = ref(null);
const filePreview = ref(null);
const isSuccess = ref(false);

const onFileChange = (e) => {
  file.value = e.target.files[0];
  if (file.value) {
    filePreview.value = URL.createObjectURL(file.value);
  }
};

const submitSlip = () => {
  if (!file.value) {
    alert("กรุณาอัพโหลดสลิปก่อนส่ง");
    return;
  }

  // ส่งสลิปผ่าน API ได้ที่นี่
  // await uploadSlip(file.value);

  // แสดง popup สำเร็จ
  isSuccess.value = true;
};

const closePopup = () => {
  // รีเซ็ตทั้งหมด
  isSuccess.value = false;
  file.value = null;
  filePreview.value = null;
};

const cancel = () => {
  file.value = null;
  filePreview.value = null;
  alert("ยกเลิกการส่งสลิป");
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600;700&display=swap');

/* transition popup */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>