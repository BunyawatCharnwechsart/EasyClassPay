<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 font-Bai-Jamjuree">
    <div class="bg-white rounded-2xl shadow-xl border border-blue-200 w-[380px] p-6 text-center">

      <!-- หัวข้อ -->
      <h2 class="text-2xl font-bold mb-4">แนบสลิปจ่ายเงิน</h2>

      <!-- ข้อมูลบัญชี -->
      <div class="text-gray-700 text-left space-y-2 mb-6">
        <p><span class="font-semibold">ชื่อบัญชี :</span> นายบุญณรงค์ ชาญเวชศาสตร์</p>
        <p><span class="font-semibold">เลขที่บัญชีผู้รับเงิน :</span> 555XXXXXX</p>
        <p><span class="font-semibold">จำนวนเงินที่ต้องการชำระ :</span> 1500 บาท</p>
      </div>

      <!-- กล่องอัปโหลดสลิป -->
      <label
        for="file-upload"
        class="cursor-pointer flex flex-col justify-center items-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
      >
        <img src="https://www.svgrepo.com/show/408362/upload.svg" alt="upload" class="w-10 h-10 opacity-60 mb-2" />
        <p class="text-gray-500 text-sm">เลือกไฟล์สลิป<br />เพื่ออัพโหลด</p>
        <input id="file-upload" type="file" class="hidden" @change="onFileChange" />
      </label>

      <!-- ปุ่ม -->
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const file = ref(null);

const onFileChange = (e) => {
  file.value = e.target.files[0];
};

const submitSlip = () => {
  if (!file.value) {
    alert("กรุณาอัพโหลดสลิปก่อนส่ง");
    return;
  }
  alert("ส่งสลิปเรียบร้อย!");
};

const cancel = () => {
  file.value = null;
  alert("ยกเลิกการส่งสลิป");
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600;700&display=swap');
</style>