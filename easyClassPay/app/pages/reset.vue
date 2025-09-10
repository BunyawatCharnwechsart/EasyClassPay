<template>
  <div
    class="bg-[url('/loginBG.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-end items-center px-16"
  >
    <div
      class="bg-white p-8 w-[550px] h-[685px] max-w-[650px] shadow-lg rounded-xl text-black mr-24 flex flex-col"
    >
      <form @submit.prevent="handleSubmit" class="flex flex-col flex-1">
        <!-- Header -->
        <h1 class="text-center font-semibold text-2xl mb-2">รีเซ็ตรหัสผ่าน</h1>
        <p class="text-center text-base mb-8 text-gray-600">
          กรุณากรอกรหัสยืนยัน
        </p>

        <!-- Verify Code -->
        <label for="verifyCode" class="block font-medium text-base mb-2">รหัสยืนยัน</label>
        <input
          id="verifyCode"
          type="text"
          v-model="verifyCode"
          placeholder="กรุณากรอกรหัสยืนยัน"
          required
          class="w-full h-12 px-4 border border-gray-400 rounded-lg text-base text-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <!-- New Password -->
        <label for="newPassword" class="block font-medium text-base mb-2">รหัสผ่านใหม่</label>
        <input
          id="newPassword"
          type="password"
          v-model="newPassword"
          placeholder="กรุณากรอกรหัสผ่านใหม่"
          required
          class="w-full h-12 px-4 border border-gray-400 rounded-lg text-base text-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <!-- Confirm Password -->
        <label for="confirmPassword" class="block font-medium text-base mb-2">ยืนยันรหัสผ่านใหม่</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          placeholder="กรุณากรอกยืนยันรหัสผ่านใหม่"
          required
          class="w-full h-12 px-4 border border-gray-400 rounded-lg text-base text-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <!-- Submit Button -->
        <div class="mt-auto">
          <button
            type="submit"
            class="w-full h-12 bg-green-700 text-white font-semibold text-base rounded-lg cursor-pointer transition-colors hover:bg-green-800"
          >
            ยืนยัน
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const verifyCode = ref("")
const newPassword = ref("")
const confirmPassword = ref("")

function handleSubmit() {
  if (newPassword.value !== confirmPassword.value) {
    alert("รหัสผ่านใหม่และยืนยันรหัสผ่านใหม่ไม่ตรงกัน")
    return
  }
  // logic reset password here
  alert("ยืนยันเรียบร้อย")
}

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600&display=swap",
    },
  ],
})
</script>