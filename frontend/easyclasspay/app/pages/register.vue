<template>
  <div
    class="bg-[url('/loginBG.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-end items-center px-16"
  >
    <div
      class="bg-white p-8 w-[550px] h-[685px] max-w-[650px] shadow-lg rounded-xl text-black mr-24"
    >
      <h1 class="text-center font-semibold text-3xl mb-0">สมัครสมาชิก</h1>
      <p class="text-center text-lg mb-4 text-gray-600">
        กรุณากรอกข้อมูลเพื่อทำการสมัครบัญชีผู้ใช้
      </p>

      <form action="" method="post" class="space-y-4">
        <!-- Username -->
        <div>
          <label for="username" class="block font-medium text-lg mb-1">ชื่อผู้ใช้</label>
          <input
            type="text"
            name="username"
            placeholder="กรุณากรอกชื่อผู้ใช้"
            required
            class="w-full h-12 px-4 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <!-- First & Last name -->
        <div class="flex gap-3">
          <div class="flex-1">
            <label class="block font-medium text-lg mb-0">ชื่อจริง</label>
            <input
              type="text"
              placeholder="กรุณากรอกชื่อจริง"
              required
              class="w-full h-12 px-4 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div class="flex-1">
            <label class="block font-medium text-lg mb-0">นามสกุล</label>
            <input
              type="text"
              placeholder="กรุณากรอกนามสกุล"
              required
              class="w-full h-12 px-4 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block font-medium text-lg mb-0">อีเมล</label>
          <input
            type="email"
            name="email"
            placeholder="กรุณากรอกอีเมล"
            required
            class="w-full h-12 px-4 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block font-medium text-lg mb-0">รหัสผ่าน</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              required
              class="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2"
              @click="togglePassword"
            >
              <img
                :src="showPassword ? '/view.png' : '/hide.png'"
                alt="Toggle Password Visibility"
                class="w-6 h-6"
              />
            </button>
          </div>
        </div>

        <!-- Birthdate -->
        <div>
          <label for="birthdate" class="block font-medium text-lg mb-1">วันเกิด</label>
          <div class="flex gap-3">
            <select
              v-model="birthDay"
              class="flex-1 h-12 px-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">วัน</option>
              <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
            </select>

            <select
              v-model="birthMonth"
              class="flex-1 h-12 px-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">เดือน</option>
              <option v-for="(m, index) in months" :key="index" :value="index + 1">
                {{ m }}
              </option>
            </select>

            <select
              v-model="birthYear"
              class="flex-1 h-12 px-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">ปี</option>
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>
        </div>

        <!-- Submit -->
        <NuxtLink
          to="/"
          class="block w-full h-12 bg-green-700 text-white font-semibold text-base rounded-lg cursor-pointer text-center leading-[3rem] hover:bg-green-800 transition-colors"
        >
          สมัครสมาชิก
        </NuxtLink>

        <!-- Login link -->
        <div class="text-center">
          <NuxtLink to="/" class="font-semibold text-base text-black hover:underline w-full">
            เข้าสู่ระบบ
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const birthDay = ref("")
const birthMonth = ref("")
const birthYear = ref("")

const months = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => currentYear - i)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>