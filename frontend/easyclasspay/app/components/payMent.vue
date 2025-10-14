<template>

                <!-- จ่ายเงิน -->
                <div class="bg-white shadow-2xl w-1/3 rounded-2xl flex flex-col">
                    <!-- หัวข้อ -->
                    <div class="flex bg-[#FFBC12] p-10 justify-center shadow-xl rounded-2xl mb-5">
                        <h1 class="text-3xl font-bold">เลือกวิธีชำระเงิน</h1>
                    </div>

                    <!-- กล่องตัวเลือก -->
                    <div class="flex justify-center flex-1">
                        <div class="flex flex-col gap-5 p-5 w-100">
                            <!-- เลือกธนาคาร -->
                            <div class="bg-white border-1 border-gray cursor-pointer text-2xl hover:scale-105 transition-transform duration-500">
                                <div class="flex items-center gap-5 p-2 justify-center">
                                    <img src="/bank-logo.png">
                                    <h1>กรุณาเลือกธนาคาร</h1>
                                </div>
                                <div class="w-full h-0.5 bg-gray-400 mt-1"></div>
                                <div class="flex p-2 justify-center">
                                    <span>เลือกธนาคารที่ต้องการ</span>
                                </div>
                            </div>

                            <!-- พร้อมเพย์ -->
                            <div class="bg-white border-1 border-gray cursor-pointer text-2xl hover:scale-105 transition-transform duration-500 ">
                                <div class="flex items-center gap-5 p-2 justify-center">
                                    <img src="/prompay-logo.png">
                                    <h1>พร้อมเพย์</h1>
                                </div>
                                <div class="w-full h-0.5 bg-gray-400 mt-1"></div>
                                <div class="flex p-2 justify-center">
                                    <span>ใส่หมายเลขพร้อมเพย์</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ถัดไป -->
                    <div class="mt-auto p-5">
                        <button class="cursor-pointer w-full bg-[#159448] text-white py-3 rounded-xl text-xl font-bold flex justify-center gap-5" @click="goNext" >ถัดไป <img src="/arrow-r.png"></button>
                    </div>
                </div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goNext = () => {
    router.push('/main')
};

</script>