<template>
  <div
    class="bg-[url('/loginBG.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-end items-center px-16"
  >
    <div
      class="bg-white shadow-lg rounded-xl w-[550px] h-[685px] max-w-[650px] p-8 mr-24 flex flex-col"
    >
      <h1 class="text-3xl font-semibold text-center mt-8 mb-2">เข้าสู่ระบบ</h1>
      <p class="text-lg text-gray-600 text-center mb-8">
        กรุณากรอกข้อมูลเพื่อทำการเข้าสู่ระบบ
      </p>

      <form class="flex flex-col gap-5">
        <!-- Username -->
        <div>
          <label for="username" class="block text-lg font-medium mb-2">ชื่อผู้ใช้</label>
          <input
            type="text"
            name="username"
            placeholder="กรุณากรอกชื่อผู้ใช้"
            required
            class="w-full h-12 px-4 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-lg font-medium mb-2">รหัสผ่าน</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              name="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              required
              class="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-600 outline-none"
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

        <!-- Forgot Password -->
        <NuxtLink
          to="/prereset"
          class="text-red-600 font-semibold text-center hover:underline"
        >
          ลืมรหัสผ่าน
        </NuxtLink>

        <!-- Login Button -->
        <button
          type="button"
          class="w-full h-12 bg-green-600 text-white font-semibold text-base rounded-lg hover:bg-green-700 transition"
          @click="() => navigateTo('/main')"
        >
          เข้าสู่ระบบ
        </button>

        <!-- Google Login Button -->
        <button
          type="button"
          class="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center gap-3 font-semibold text-base text-gray-700 hover:bg-gray-50 transition mb-10"
          @click="loginWithGoogle"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            class="w-6 h-6"
          />
          <span>ล็อกอินด้วย Google</span>
        </button>

        <!-- Register Link -->
        <div class="text-center m-8">
          <NuxtLink to="/register" class="font-semibold text-base hover:underline">
            สมัครสมาชิก
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const loginWithGoogle = () => {
  alert('Login with Google clicked')
}

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600&display=swap',
    },
  ],
})
</script>