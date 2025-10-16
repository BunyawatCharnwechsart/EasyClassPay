<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 font-Bai-Jamjuree">
    
    <!-- หน้าอัปโหลด จะไม่แสดงอีกหลังคลิกส่ง -->
    <div v-if="!isSuccess" class="bg-white rounded-2xl shadow-xl border border-blue-200 w-[380px] p-12 text-center">
      <h2 class="text-2xl font-bold mb-4">แนบสลิปจ่ายเงิน</h2>

      <div class="text-gray-700 text-left space-y-2 mb-6 p-2">
        <p><span class="mb-10 font-semibold">ชื่อบัญชี :</span> นายบุญณรงค์ ชาญเวชศาสตร์</p>
        <p><span class="mt-10 font-semibold">เลขที่บัญชีผู้รับเงิน :</span> 555XXXXXX</p>
        <p><span class="mt-10 mb-10 font-semibold">จำนวนเงินที่ต้องการชำระ :</span> 1500 บาท</p>
      </div>

      <label
        for="file-upload"
        class="cursor-pointer flex flex-col justify-center items-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
      >
        <img src="https://www.svgrepo.com/show/408362/upload.svg" alt="upload" class="w-10 h-10 opacity-60 mb-2" />
        <p class="text-gray-500 text-sm">เลือกไฟล์สลิป<br />เพื่ออัพโหลด</p>
        <input id="file-upload" type="file" class="hidden" @change="onFileChange" />
      </label>

      <div class="flex flex-col space-y-3 mt-6">
        <button
          class="bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition"
          @click="submitSlip"
        >
          ส่งสลิป
        </button>
        <button
          class="text-gray-500 hover:text-gray-700 font-medium"
          @click="cancel"
        >
          ยกเลิก
        </button>
      </div>
    </div>

    <!-- หน้าสำเร็จ คลิกตรงไหนก็หายไปเลย -->
    <div 
      v-if="isSuccess"
      class="fixed inset-0 flex justify-center items-center bg-black/30 cursor-pointer z-50"
      @click="isSuccess = false"
    >
      <div class="bg-white rounded-2xl shadow-xl w-[340px] p-10 text-center">
        <div class="flex flex-col items-center">
          <div class="bg-green-500 rounded-full w-14 h-14 flex justify-center items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-gray-800 mb-1">เสร็จสิ้น</h2>
          <p class="text-gray-400 text-sm">กดที่ไหนก็ได้เพื่อออก</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const file = ref(null);
const isSuccess = ref(false);

const onFileChange = (e) => {
  file.value = e.target.files[0];
};

const submitSlip = () => {
  if (!file.value) {
    alert("กรุณาอัพโหลดสลิปก่อนส่ง");
    return;
  }

  isSuccess.value = true;
};

const cancel = () => {
  file.value = null;
  alert("ยกเลิกการส่งสลิป");
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600;700&display=swap');
</style>