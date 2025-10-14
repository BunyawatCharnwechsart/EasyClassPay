<template>
  <div class="mt-10 flex flex-col items-center space-y-6 w-full">

    <!-- ช่องเลือกวันเวลา -->
    <input 
      type="datetime-local" 
      class="w-full h-20 bg-white rounded-2xl shadow-xl px-6 text-gray-700 text-lg outline-none"
    />

    <!-- Dropdown-->
    <div class="relative w-full">
        

      <!-- กล่องแสดงผล -->
      <div 
        @click="open = !open"
        class="flex justify-between items-center w-full bg-white rounded-2xl shadow-xl px-6 h-20 cursor-pointer text-gray-700 text-lg"
      >
        <span class="flex items-center space-x-3">
          <img src="/infinityicon.png" alt="icon" class="w-7 h-7" />
          <span class="font-medium">{{ selected }}</span>
        </span>

        <!-- ไอคอนลูกศร -->
        <svg class="w-6 h-6 text-gray-500 transition-transform duration-200" 
             :class="open ? 'rotate-180' : ''"
             fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <!-- เมนูรายการ -->
      <transition name="fade">
        <div
          v-if="open"
          class="absolute w-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden text-gray-700 text-lg z-10"
        >
          <ul class="flex flex-col divide-y divide-gray-100">
            <li v-for="(option, i) in options" :key="i">
                <div 
                    @click="selectOption(option)"
                    class="flex items-center px-6 py-4 hover:bg-gray-50 cursor-pointer"
                >
                    <img src="/infinityicon.png" alt="icon" class="w-6 h-6 mr-3" />
                    <span>{{ option }}</span>
                </div>

            </li>
          </ul>
        </div>
      </transition>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
const selected = ref('ไม่มีจุดสิ้นสุด')

const options = [
  'ไม่มีจุดสิ้นสุด',
  'เก็บทั้งหมด 1 ครั้ง',
  'เก็บทั้งหมด 2 ครั้ง',
  'เก็บทั้งหมด 3 ครั้ง',
  'เก็บทั้งหมด 4 ครั้ง',
  'เก็บทั้งหมด 5 ครั้ง',
  'เก็บทั้งหมด 6 ครั้ง',
]

function selectOption(option) {
  selected.value = option
  open.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

</style>