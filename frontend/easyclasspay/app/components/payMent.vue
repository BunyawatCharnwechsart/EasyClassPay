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

    <!-- เนื้อหา tab bank -->
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
                    v-for="(item, index) in listBank" :key="index" class="p-5 gap-5 flex items-center hover:bg-gray-300 hover:rounded-2xl"
                >
                    <img class="h-8" :src="item.img">
                    <h1>{{ item.name }}</h1>
                </div>
            </div>
        </div>
        <!-- input bank -->
        <form action="" class="flex flex-col gap-5 pt-8">
            <!-- ชื่อบัญชี -->
            <span class="text-xl font-bold">ชื่อบัญชี</span>
            <input class="p-5 rounded-2xl border-gray-400 border-2" 
            type="text" placeholder="กรุณากรอกชื่อบัญชี">
            <!-- เลขบัญชี -->
            <span class="text-xl font-bold">เลขบัญชี</span>
            <input class="p-5 rounded-2xl border-gray-400 border-2" 
            type="text" placeholder="กรุณากรอกเลขบัญชี">
            <!-- Button send -->
            <button class="bg-[#159448] p-5 rounded-2xl text-white text-2xl font-bold cursor-pointer mt-10 flex justify-center items-center gap-5">
                ถัดไป
                <img src="/arrow-r.png">
            </button>
        </form>
    </div>
    <!-- เนื้อหา tab promptpay -->
    <div v-else-if="activeTab === 'promptpay'" class="p-6 space-y-3 h-full">
        <!-- input promptpay -->
        <form action="" class="flex flex-col gap-5 h-full">
            <!-- ชื่อบัญชี -->
            <span class="text-xl font-bold">ชื่อบัญชี</span>
            <input class="p-5 rounded-2xl border-gray-400 border-2" 
            type="text" placeholder="กรุณากรอกชื่อบัญชี">
            <!-- รหัสพร้อมเพย์ -->
            <span class="text-xl font-bold">รหัสพร้อมเพย์</span>
            <input class="p-5 rounded-2xl border-gray-400 border-2" 
            type="text" placeholder="กรุณากรอกรหัสพร้อมเพย์">
            <!-- Button send -->
            <button class="bg-[#159448] p-5 rounded-2xl text-white text-2xl font-bold cursor-pointer mt-auto flex justify-center items-center gap-5">
                ถัดไป
                <img src="/arrow-r.png">
            </button>
        </form>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('bank');
const isOpen = ref(false);

const router = useRouter();
const goNext = () => {
    router.push('/main')
};

</script>
