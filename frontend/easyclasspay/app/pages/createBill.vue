<template>
    <div class="font-Bai-Jamjuree select-none">

        <navbar/>

    <form class="flex flex-col bg-white m-10 rounded-2xl ring ring-yellow-200 col-auto">

        <div class="m-10">
            <div class="flex gap-3 items-baseline">
                <h1 class="text-3xl font-bold">สร้างบิลเก็บตังค์</h1>
                <p class="text-xl">ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ </p>
            </div>

                <div class="flex justify-between mt-5 gap-4">
                    <div class="flex flex-col gap-4 w-2/3">

                        <!-- ที่กรอกชื่อกับยอดบิล -->
                        <div class="bg-white shadow-xl rounded-b-2xl">
                            <div class="bg-[#FFC93F] h-12 rounded-b-full"></div>
                            <div class="flex justify-between p-10">

                                <div class="flex gap-5 items-center">
                                    <label class="text-2xl font-black" for="name">ชื่อบิล</label>
                                    <input class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อยย">
                                </div>

                                <div class="flex gap-5 items-center">
                                    <label class="text-2xl font-bold" for="total">ยอดบิล</label>
                                    <input class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" type="number" placeholder="กรุณาใส่ยอดเงิน">
                                </div>

                            </div>
                        </div>

                        <!-- list ชื่อเพื่อนที่อยู่ในบิล -->
                        <div class="bg-white shadow-2xl p-5 rounded-xl h-200">   
                            <!-- หัวข้อ -->
                            <div class="flex justify-between items-center">
                                <h1 class="text-2xl font-semibold">รายชื่อคนที่อยู่ในบิล</h1>
                                <button class=" flex items-center cursor-pointer bg-[#FFBC12] w-30 h-10 justify-center rounded-xl" onclick="my_modal_3.showModal()"><img class="w-5 h-5 mr-1" src="/plus.png">เพิ่มเพื่อน</button>

                                    <!-- Model ของเพิ่มเพื่อนลงในบิล -->
                                    <dialog id="my_modal_3" class="modal">
                                        <div class="modal-box bg-white select-none rounded-2xl font-Bai-Jamjuree">
                                            <form method="dialog">
                                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <div class="flex flex-col gap-4">
                                                <div class="flex items-baseline-last gap-2">
                                                    <h3 class="text-xl font-bold">เพิ่มเพื่อนลงในบิล</h3>
                                                    <h2>ใครต้องจ่ายบ้าง</h2>
                                                </div>
                                                
                                                <!-- ค้นหา -->
                                                <ModelSearch/>
                                                <!-- รายชื่อเพื่อนของฉันที่เพิ่มได้ -->
                                                <friendList :usersData="usersData"/>
                                            </div>
                                        </div>
                                    </dialog>
                            </div>

                            <!-- แสดงชื่อ -->
                            <div class="h-150">
                                <div class="mt-4 p-4 rounded-t-lg bg-[#EBEBEB]">
                                    <label for="list-name" class="ml-1 text-xl">ชื่อ / อีเมล</label>
                                </div>

                                <!-- ใส่รายชื่อ -->
                                <div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- จ่ายตัง -->
                    <div class="flex flex-col gap-4 w-1/3">
                        <div class="bg-white shadow-2xl rounded-2xl flex flex-col h-220">
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
                            <div class="bg-white shadow-[0_0_25px_rgba(0,0,0,0.3)] border-none rounded-2xl">
                            <!-- ปุ่มหลัก dropdown -->
                            <button
                                @click="isOpen = !isOpen"
                                class="w-full flex justify-between items-center text-xl p-8"
                            >
                                <div class="flex gap-6 items-center">
                                    <img :src="selectedBank ? selectedBank.img : '/bank-logo.png'" alt="" class="h-8" />
                                    {{ selectedBank ? selectedBank.name : 'กรุณาเลือกธนาคาร' }}
                                </div>

                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="w-8 h-8 text-gray-500 transition-transform duration-300"
                                :class="{ 'rotate-180': isOpen }"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- รายชื่อธนาคาร -->
                            <div v-if="isOpen" class="border-t border-gray-300">
                                <div
                                v-for="(item, index) in listBank"
                                :key="index"
                                @click="selectBank(item)"
                                :class="[
                                    'p-5 gap-5 flex items-center cursor-pointer transition-all',
                                    selectedBank?.name === item.name
                                    ? 'bg-green-100 rounded-2xl border-2 border-green-500'
                                    : 'hover:bg-gray-200 hover:rounded-2xl'
                                ]"
                                >
                                <img class="h-8" :src="item.img" />
                                <h1 class="text-xl">{{ item.name }}</h1>
                                </div>
                            </div>
                            
                            </div>
                            <!-- input bank -->
                            <div class="flex flex-col gap-5 pt-8">
                                <!-- ชื่อบัญชี -->
                                <span class="text-xl font-bold">ชื่อบัญชี</span>
                                <input class="p-5 rounded-2xl border-gray-400 border-2" 
                                type="text" placeholder="กรุณากรอกชื่อบัญชี">
                                <!-- เลขบัญชี -->
                                <span class="text-xl font-bold">เลขบัญชี</span>
                                <input class="p-5 rounded-2xl border-gray-400 border-2" 
                                type="text" placeholder="กรุณากรอกเลขบัญชี">
                            </div>
                        </div>
                        <!-- เนื้อหา tab promptpay -->
                        <div v-else-if="activeTab === 'promptpay'" class="p-6 space-y-3 h-full">
                            <!-- input promptpay -->
                            <div action="" class="flex flex-col gap-5 h-full">
                                <!-- ชื่อบัญชี -->
                                <span class="text-xl font-bold">ชื่อบัญชี</span>
                                <input class="p-5 rounded-2xl border-gray-400 border-2" 
                                type="text" placeholder="กรุณากรอกชื่อบัญชี">
                                <!-- รหัสพร้อมเพย์ -->
                                <span class="text-xl font-bold">รหัสพร้อมเพย์</span>
                                <input class="p-5 rounded-2xl border-gray-400 border-2" 
                                type="text" placeholder="กรุณากรอกรหัสพร้อมเพย์">
                            </div>
                        </div>
                        
                    </div>

                        <div class="flex mt-auto justify-center w-full">
                            <router-link
                            to="/submitcreatebill"
                                type="submit"
                                class="bg-[#159448] hover:bg-[#11783a] py-4 rounded-xl text-white text-2xl font-bold flex justify-center items-center gap-3 shadow-lg transition w-[100%]">
                                ถัดไป
                                <img src="/arrow-r.png" alt="arrow" class="w-5 h-5" />
                            </router-link>
                        </div>

                    </div>
                </div>
                
        </div>

    </form>
        <!-- footer -->
        <about />  
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('bank');
const isOpen = ref(false);
const selectedBank = ref(null)

const listBank = [
    {
        img:'/kongthai.png',
        name:'ธนาคารกรุงไทย'
    },
    {
        img:'/thaipanit.png',
        name:'ธนาคารไทยพาณิชย์'
    },
    {
        img:'/kasikon.png',
        name:'ธนาคารกสิกรไทย'
    }
];

import navbar from '~/components/navbar.vue';
import about from '~/components/about.vue';
import ModelSearch from '~/components/ModelSearch.vue';
import friendList from '~/components/friendList.vue';

const {
    data: usersData,
    error: usersError
} = await useFetch('http://localhost:3005/api/users');

function selectBank(bank) {
selectedBank.value = bank
isOpen.value = false
}
</script>