<template>
    <div class="font-Bai-Jamjuree">

        <navbar />

        <div class="m-10">
            <div class="flex gap-3 items-baseline">
                <h1 class="text-3xl font-bold">สร้างบิลเก็บตังค์</h1>
                <p class="text-xl">ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ </p>
            </div>

            <div class="flex justify-between mt-5 gap-4">
                <div class="flex flex-col gap-4 w-2/3">

                    <!-- ที่กรอกชื่อกับยอดบิล -->
                    <div class="bg-white shadow-xl">
                        <div class="bg-[#FFC93F] h-12 rounded-b-full"></div>
                        <div class="flex justify-between p-10">

                            <div class="flex gap-5 items-center">
                                <label class="text-2xl font-black" for="name">ชื่อบิล</label>
                                <input class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อยย">
                            </div>

                            <div class="flex gap-5 items-center">
                                <label class="text-2xl font-bold" for="total">ยอดบิล</label>
                                <input class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" type="text" placeholder="กรุณาใส่ยอดเงิน">
                            </div>

                        </div>
                    </div>

                    <!-- list ชื่อเพื่อนที่อยู่ในบิล -->
                    <div class="bg-white shadow-2xl p-5 rounded-xl">   
                        <!-- หัวข้อ -->
                        <div class="flex justify-between items-center">
                            <h1 class="text-2xl font-semibold">รายชื่อคนที่อยู่ในบิล</h1>
                            <button class="flex items-center cursor-pointer bg-[#FFBC12] w-30 h-10 justify-center rounded-xl"><img class="w-5 h-5 mr-1" src="/plus.png">เพิ่มเพื่อน</button>
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
                            <div class="bg-white border-1 border-gray cursor-pointer text-2xl">
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
                            <div class="bg-white border-1 border-gray cursor-pointer text-2xl">
                                <div class="flex items-center gap-5 p-2 justify-center">
                                    <img src="/bank-logo.png">
                                    <h1>กรุณาเลือกธนาคาร</h1>
                                </div>
                                <div class="w-full h-0.5 bg-gray-400 mt-1"></div>
                                <div class="flex p-2 justify-center">
                                    <span>เลือกธนาคารที่ต้องการ</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ถัดไป -->
                    <div class="mt-auto p-5">
                        <button class="w-full bg-[#159448] text-white py-3 rounded-xl text-xl font-bold flex justify-center gap-5">ถัดไป <img src="/arrow-r.png"></button>
                    </div>
                </div>

            </div>
        </div>

        <about />
        
    </div>
</template>

<script setup>
import navbar from '~/components/navbar.vue'
import about from '~/components/about.vue';
</script>