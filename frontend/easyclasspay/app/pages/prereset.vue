<template>
  <div
    class="bg-[url('/loginBG.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-end items-center px-16"
  >
    <div
      class="bg-white p-8 w-[550px] h-[685px] max-w-[650px] shadow-lg rounded-xl text-black mr-24 flex flex-col"
    >
      <!-- Header -->
      <h1 class="text-center font-semibold text-2xl mb-2">ทำการรีเซ็ตรหัสผ่าน</h1>
      <p class="text-center text-base mb-8 text-gray-600">
        กรุณากรอกอีเมลเพื่อทำการรีเซ็ตรหัสผ่าน
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="flex flex-col flex-1">
        <label for="email" class="block font-medium text-base mb-2">อีเมล</label>
        <input
          type="email"
          v-model="email"
          placeholder="กรุณากรอกอีเมล"
          required
          class="w-full h-12 px-4 border border-gray-300 rounded-lg text-base text-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div class="mt-auto">
          <button
            type="submit"
            class="w-full h-12 bg-green-700 text-white font-semibold text-base rounded-lg cursor-pointer transition-colors hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
            :disabled="!isValidEmail"
          >
            ส่งรหัสผ่านทางอีเมล
          </button>
        </div>
      </form>

      <!-- Login Link -->
      <div class="text-center mt-6">
        <NuxtLink
          to="/"
          class="font-semibold text-base text-black hover:underline"
        >
          เข้าสู่ระบบ
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"

const email = ref("")
const router = useRouter()

const isValidEmail = computed(() => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email.value)
})

const handleSubmit = () => {
  if (isValidEmail.value) {
    router.push("/reset")
  }
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