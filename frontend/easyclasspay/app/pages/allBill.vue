<template>
<div class="font-Bai-Jamjuree select-none">
    <navbar/>
        <div class="m-10">
            <div class="flex gap-3 items-baseline">
                <h1 class="text-3xl font-bold">บิลทั้งหมด</h1>
                <p class="text-xl">บิลทั้งหมดพี่หมีเก็บไวในนี้นะ</p>
            </div>

            <section class="flex mt-5 gap-5">
                <!-- sidebar -->
                <div class="flex flex-col bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] w-1/5 rounded-2xl">
                    <span class="p-2 text-xl font-bold">ชนิดของบิล</span>
                    <ul class="flex flex-col">
                    <li
                        v-for="(item, index) in bills"
                        :key="index"
                        @click="selected = index"
                        class="cursor-pointer p-7 font-bold border-t border-gray-200 hover:bg-amber-300 transition"
                        :class="selected === index ? 'bg-amber-300 text-black rounded-lg' : ''"
                    >
                        {{ item }}
                    </li>
                    </ul>
                </div>

                <!-- Showbill -->
                <div class="w-4/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-2xl">
                    <p class="p-1 pl-5">รายการบิล</p>
                    <div class="h-0.5 w-full bg-gray-200"></div>

                    <!-- show card -->
                    <section class="p-5">
                        <component
                        :is="[
                            ModelallBill,
                            ModelGetBill,
                            ModelMonthBill,
                            ModelPendingBill
                        ][selected]"
                        />
                    </section>
                </div>

            </section>
        </div>
    <about/>
</div>
</template>

<script setup> 
import navbar from '~/components/navbar.vue';
import about from '~/components/about.vue';
import ModelallBill from '~/components/ModelallBill.vue';
import ModelMonthBill from '~/components/ModelMonthBill.vue';
import ModelPendingBill from '~/components/ModelPendingBill.vue';
import ModelGetBill from '~/components/ModelGetBill.vue';
import { ref } from 'vue'

const bills = [    
    "บิลทั้งหมด",
    "บิลเก็บตังค์",
    "บิลรายเดือน",
    "บิลที่รอคุณจ่าย"
]
const selected = ref(0)
</script>