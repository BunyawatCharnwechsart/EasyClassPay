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
        <div class="relative mb-6">
          <input
            id="newPassword"
            :type="showNewPassword ? 'text' : 'password'"
            v-model="newPassword"
            placeholder="กรุณากรอกรหัสผ่านใหม่"
            required
            class="w-full h-12 px-4 pr-12 border border-gray-400 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2"
            @click="showNewPassword = !showNewPassword"
          >
            <img
              :src="showNewPassword ? '/view.png' : '/hide.png'"
              alt="toggle visibility"
              class="w-5 h-5"
            />
          </button>
        </div>


       <!-- Confirm Password -->
        <label for="confirmPassword" class="block font-medium text-base mb-2">ยืนยันรหัสผ่านใหม่</label>
        <div class="relative mb-6">
        <input
          id="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          v-model="confirmPassword"
          placeholder="กรุณากรอกยืนยันรหัสผ่านใหม่"
          required
          class="w-full h-12 px-4 pr-12 border border-gray-400 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2"
          @click="showConfirmPassword = !showConfirmPassword"
        >
          <img
            :src="showConfirmPassword ? '/view.png' : '/hide.png'"
            alt="toggle visibility"
            class="w-5 h-5"
          />
        </button>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="!isFormValid"
          class="w-full h-12 bg-green-700 text-white font-semibold text-base rounded-lg cursor-pointer transition-colors hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed mt-40"
        >
          ยืนยัน
        </button>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"

const verifyCode = ref("")
const newPassword = ref("")
const confirmPassword = ref("")
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

const router = useRouter()

const isFormValid = computed(() => {
  return (
    verifyCode.value.trim() !== "" &&
    newPassword.value.trim() !== "" &&
    confirmPassword.value.trim() !== "" &&
    newPassword.value === confirmPassword.value
  )
})

function handleSubmit() {
  if (!isFormValid.value) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน และให้รหัสผ่านตรงกัน")
    return
  }

  // ที่นี่คุณสามารถใส่ logic สำหรับ reset password ได้
  alert("รีเซ็ตรหัสผ่านเรียบร้อยแล้ว")

  // นำทางไปยังหน้าเข้าสู่ระบบ
  router.push("/")
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