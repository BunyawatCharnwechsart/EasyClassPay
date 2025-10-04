<template>
<!-- จ่ายเงิน -->
<div class="bg-white shadow-2xl w-1/3 rounded-2xl flex flex-col">
    <!-- หัวข้อ -->
    <div class="flex text-3xl font-bold justify-center p-9 bg-[#FFC93F] rounded-2xl">
    เลือกธนาคาร
    </div>

    <!-- แถบ Navigation -->
    <div class="flex justify-around p-5">
    <!-- Tab ธนาคาร -->
        <button
        @click="activeTab = 'bank'"
        :class="[
            'text-2xl px-4 py-2 rounded-lg transition flex flex-col hover:text-green-600',
            activeTab === 'bank' ? 'text-green-600 font-bold' : 'font-bold'
        ]"
        >
        ธนาคาร
        <span
            v-if="activeTab === 'bank'"
            class="bg-green-600 h-1 w-full mt-2 rounded-full"
        ></span>
        </button>

        <!-- Tab พร้อมเพย์ -->
        <button
        @click="activeTab = 'promptpay'"
        :class="[
            'text-2xl px-4 py-2 rounded-lg transition flex flex-col hover:text-green-600',
            activeTab === 'promptpay' ? 'text-green-600 font-bold' : 'font-bold'
        ]"
        >
        พร้อมเพย์
        <span
            v-if="activeTab === 'promptpay'"
            class="bg-green-600 h-1 w-full mt-2 rounded-full"
        ></span>
        </button>
    </div>

    <!-- เนื้อหา tab -->
    <div v-if="activeTab === 'bank'" class="p-6 space-y-3">
        <!-- select bank -->
        <div class="bg-white shadow-[0_0_25px_rgba(0,0,0,0.3)] collapse border-none">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title text-2xl font-bold flex gap-10 p-8"
            >
                <img src="\bank-logo.png" alt=""> กรุณาเลือกธนาคาร
            </div>
            <!-- รายชื่อธนาคาร -->
            <div
                class="collapse-content"
            >
                <div
                    v-for="(item, index) in listBank" :key="index" class="p-5"
                >
                    <img :src="item.img">
                    <h1>{{ item.name }}</h1>
                </div>
            </div>
        </div>
        <!-- input -->
        <p>Lorem, ipsum.</p>
    </div>

    <div v-else-if="activeTab === 'promptpay'" class="p-6">
        <p>สแกน QR พร้อมเพย์ เพื่อชำระเงิน</p>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('bank');
const isOpen = ref(false);

const listBank = [
    {
        img:'',
        name:'ออมสิน'
    },
    {
        img:'',
        name:'กสิกร'
    }
];
</script>
